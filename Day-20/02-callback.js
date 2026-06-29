// console.log("Hi from callback");

// callback function
const printHi = () => {
  console.log("Hi");
};

// 2s over - printHi (callback) function called
setTimeout(printHi, 2000);

// Callback
// Event completes - Action taken - 🎉
// Reach India - Call mom
// Manager back - Whatsapp msg
// Time is 4am - Knock door

// Types of callback
// 1. Sync - No time involvement -  dbl
// 2. Async - Time involvement   - printHi

const dbl = (num) => num * 2;
[1, 2, 3].map(dbl);

// setTimeout, map - HOF
