const path = require('path');

console.log('File Name', __filename); // => /home/andrii/Documents/Code-example/Node/Node-Basics/refs/01_path.js
console.log('Base Name', path.basename(__filename)); // => 01_path.js
console.log('Dir Name', path.dirname(__filename)); // => /home/andrii/Documents/Code-example/Node/Node-Basics/refs
console.log('Ext Name', path.extname(__filename)); // => .js

console.log('File Name', path.parse(__filename)); // => /**
/**
 * {
    root: '/',
    dir: '/home/andrii/Documents/Code-example/Node/Node-Basics/refs',
    base: '01_path.js',
    ext: '.js',
    name: '01_path'
  }
 */

console.log('Join', path.join(__dirname, 'test', 'second.html')); // => /home/andrii/Documents/Code-example/Node/Node-Basics/refs/test/second.html
console.log('Dir Name', path.resolve(__dirname, 'test', '/second.html')); // => /second.html
