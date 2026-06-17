// const fruits = ["🍎", "🍊", "🍌", "🍇", "🍓", "🥝"];

// for (let index = 0; index <= 3; index++) {
//   console.log(index, fruits[index]);
// }

// for (let index = 0; index < 6; index++) {
//   console.log(index, fruits[index]);
// }

// // General formula
// for (let index = 0; index < fruits.length; index++) {
//   console.log(index, fruits[index]);
// }

// for (let index = 0; index < 10; index++) {
//   console.log(index, fruits[index]);
// }

// Task 1.1
// Output
// Hulk contains 4 letters
// Iron man contains 8 letters
// ...
// Thor contains 4 letters

const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

// function printAvengers(heroes) {
//   for (let index = 0; index < heroes.length; index++) {
//     const avenger = heroes[index];
//     console.log(`${avenger} contains ${avenger.trim().length} letters`);
//   }
// }

//Task 1.2
//printAvengers(...avengers)

//const letsTry= (...avengers) => {};

printAvengers(avengers);
