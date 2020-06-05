const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

if (isMainThread) {
  console.log('isMainThread');
  module.exports = function parseJSAsync(script) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: script
      });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };
} else {
  const { parse } = require('some-js-parsing-library');
  const script = workerData;
  parentPort.postMessage(parse(script));
}

// const { Worker, isMainThread } = require('worker_threads');
//
// if (isMainThread) {
//   // This re-loads the current file inside a Worker instance.
//   new Worker(__filename);
// } else {
//   console.log('Inside Worker!');
//   console.log(isMainThread);  // Prints 'false'.
// }