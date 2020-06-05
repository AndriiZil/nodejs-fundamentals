const os = require('os');

// Platform
console.log(os.platform()); // => linux

// Architecture
console.log(os.arch()); // => x64

// Information
console.log('os.cpus()', os.cpus()); // =>
/**
 * [
 {
    model: 'Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz',
    speed: 2840,
    times: { user: 3794000, nice: 11300, sys: 850900, idle: 13477200, irq: 0 }
  },
 {
    model: 'Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz',
    speed: 2833,
    times: { user: 3827000, nice: 9300, sys: 924200, idle: 13325400, irq: 0 }
  },
 {
    model: 'Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz',
    speed: 2839,
    times: { user: 3777800, nice: 6400, sys: 868700, idle: 13488300, irq: 0 }
  },
 {
    model: 'Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz',
    speed: 2839,
    times: { user: 3753100, nice: 6300, sys: 916300, idle: 13436400, irq: 0 }
  }
 ]
 */

// Free Memory
console.log('os.freemem()', os.freemem()); // => 9525051392

// OS Total Memory
console.log('os.totalmem()', os.totalmem()); // => 16704765952

// Directory
console.log('os.homedir()', os.homedir()); // => /home/andrii

// How much time system works
console.log('os.uptime()', os.uptime()); // => 1750
