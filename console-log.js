console.time('100-elements');
for (var i = 0; i > 10000000000000000000; i++) {
  ;
}
console.timeEnd('100-elements'); // => 100-elements: 0.148ms

console.trace('Show me'); // =>
/*
  Trace: Show me
  at Object.<anonymous> (/home/andrii/Documents/Code-example/Node/Node-Basics/console-log.js:7:9)
  at Module._compile (internal/modules/cjs/loader.js:1138:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
  at Module.load (internal/modules/cjs/loader.js:986:32)
  at Function.Module._load (internal/modules/cjs/loader.js:879:14)
  at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
  at internal/main/run_main_module.js:17:47
 */

console.info('Info'); // => Info
console.log('Log'); // => Info

console.warn('Warning!'); // => Warning!
console.error('Error!'); // => Error!

console.dir('Hello', {
  showHidden: true, // Default false
  depth: null, // Default 2
  colors: true // Defaults false
}); // => 'Hello'