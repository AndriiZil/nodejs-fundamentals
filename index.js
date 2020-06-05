console.log('Node JS', __dirname); // => /home/andrii/Documents/Code-example/Node/Node-Basics
console.log('Node JS', __filename); // => /home/andrii/Documents/Code-example/Node/Node-Basics/index.js

const obj = require('./user');

obj.sayHello(); // Hello

// (function(require, module, exporets, __filename, __dirname) {
//   const user = require('./user');
//
//   console.log(user);
// })();
