// Why loops? - Perform repeated actions

// Types of loops
// 1. While - ✅
// 2. do...while - ❌
// 3. for -  ✅

// let count = 1;

// // // while block
// while (count <= 10) {
//   console.log(`Reps ${count} 🏋️`);
//   count++;
// }

// console.log("Gym done. 💪");
// console.log(count);

// for block - count is declared in for block
// for (let count = 1; count <= 10; count++) {
//   console.log(`Reps ${count} 🏋️`);
// }

// // console.log("Gym done. 💪");

// console.log(count); // not defined ❌

// for (let count = 1; count <= 10; count+=2) {
//   console.log(`Reps ${count} 🏋️`);
// }

// console.log("Gym done. 💪");

// console.log(count);
// break; // stops the loop

for (let count = 1; count <= 10; count++) {
  if (count % 2 == 1) {
    console.log(`Reps ${count} 🏋️`);
  }
}

console.log("Gym done. 💪");
