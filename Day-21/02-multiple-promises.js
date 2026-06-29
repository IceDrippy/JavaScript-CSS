// Fire all 3 requests at the time
// Collect all the data in one place

let P1 = Promise.resolve(2); // fetch friend1
let P2 = Promise.resolve(10); // fetch friend2
let P3 = Promise.resolve(3); // fetch friend3

// Load all Promise and fire all 3 at once
// Promise.all([P1, P2, P3])
//     .then((result) =>
//   console.log(
//     result,
//     result.reduce((acc, curr) => curr + acc),
//   ),
// );

// All three are independent
// var x1 = P1.then((x) => console.log(x));
// var x2 = P2.then((x) => console.log(x));
// var x3 = P3.then((x) => console.log(x));

// x1 + x2 + x3

// Multiple promise
// 1. Promise.all()
// 2. Promise.race()
// 3. Promise.allSettled()

function case1() {
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  }); // 4s

  Promise.all([P4, P5, P6]).then((result) => console.log(result));
}
// 2 + 1 + 4 = 7s
// case1();

// 1. How long it will take to result to print? 4s - ✅
// 2. [3, 2, 8] ... [2, 8, 3].. what order? [2, 8, 3]

// Any one fail - all fails
function case2() {
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  });

  Promise.all([P4, P5, P6])
    .then((result) => console.log(result)) // skip
    .catch((msg) => console.log("Oops: " + msg)); // Oops: 2
}
// all - all in -> any one fail -> all fails

// case2();

function case3() {
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  }); // 4s

  Promise.race([P4, P5, P6]).then((result) => console.log(result));
}

// P4, P6 is discarded
console.log("Started");
// case3();

//  P4
// 1. How long it will take to result to print? 1s (Fastest one wins)
// 2. What wil be result? 8 (value)

function case4() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(3);
    }, 4000);
  }); // 4s

  Promise.race([P4, P5, P6]).then((result) => console.log(result));
}

// case4(); // 8

function case5() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  }); // 4s

  Promise.race([P4, P5, P6])
    .then((result) => console.log(result))
    .catch((msg) => console.log("Ooops:", msg));
}

// case5();
// When fastest one on reject - Promise.race - error

// When all resolve - any = race
// Fastest one wins
function case6() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  }); // 4s

  Promise.any([P4, P5, P6]).then((result) => console.log(result));
}

// case6();

function case7() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(3);
    }, 4000);
  }); // 4s

  Promise.any([P4, P5, P6]).then((result) => console.log(result));
}

// Any one atleast resolve
// Fails only when all Fails - AggregateError: All promises were rejected
// case7();

function case8() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(3);
    }, 4000);
  }); // 4s

  Promise.allSettled([P4, P5, P6])
    .then((result) => console.log(result))
    .catch((msg) => console.log("Oops"));
}

// allSettled - never gets rejected
// Waits till longest one to complete
// [
//     {
//         "status": "fulfilled",
//         "value": 2
//     },
//     {
//         "status": "fulfilled",
//         "value": 8
//     },
//     {
//         "status": "rejected",
//         "reason": 3
//     }
// ]
case8();

// all
// 1. Any one reject - Rejected
// 2. When slowest one completes or until anyone rejects

// race
// 1. Fastest one reject - Rejected
// 2. When Fastest one completes

// any
// 1. When all are rejected - Rejected
// 2. When Fastest resolved one completes

// allSettled
// 1. Never Rejected
// 2. When slowest one completes
