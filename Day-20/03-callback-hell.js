// Nesting callbacks - Results in callback hell

console.log("Started");
// setTimeout(() => {
//   console.log("This is cool - 1");

//   setTimeout(() => {
//     console.log("This is cool - 2");
//   }, 2000);
// }, 2000);

// Callback hell
setTimeout(function timer1() {
  console.log("This is cool - 1");
  setTimeout(function timer2() {
    console.log("This is cool - 2");
    setTimeout(function timer3() {
      console.log("This is cool - 3");
    }, 2000);
  }, 2000);
}, 2000);
