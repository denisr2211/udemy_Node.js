const fs = require('fs');

console.log('Init');

setTimeout(() => {
    console.log(performance.now(), 'Timer 0');
}, 100);

setImmediate(() => {           // check
    console.log('Immediate');
});

fs.readFile(__filename, () => {     //  pool
    console.log('File readed');
});

setTimeout(() => {
    for (let i = 0; i < 1000000000; i++) {
        
    }
    console.log('Done');
    Promise.resolve().then(() => {
        console.log('Promise inside Timeout');
    });
    process.nextTick(() => console.log('tick inside Timeout'));
}, 0);

// добавим промисы
Promise.resolve().then(() => {
    console.log('Promise');
});

process.nextTick(() => console.log('tick'));

console.log('Final');

// $ node app.js
// Init
// Final
// tick
// Promise
// Done
// tick inside Timeout
// Promise inside Timeout
// Immediate
// 3828.581599995494 Timer 0
// File readed