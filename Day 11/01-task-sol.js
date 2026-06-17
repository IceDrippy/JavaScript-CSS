console.log([1, 2, 111, 10, 5].sort());

// [1, 2, 5, 10, 111] // ❌
// [111, 10, 5, 2, 1] // ❌

// [1, 10, 111, 2, 5] // ✅

const names = ["abc", "aab", "d", "bad"];

console.log(names.sort()); // Dictionary Sort | Lexicographical Sort

// 1 1.0 1.1.1  2.0
// 1 10 111 2 5
console.log([1, 2, 111, 10, 5].sort());
// [ 1, 10, 111, 2, 5 ]

console.log([1, 2, 111, 10, 5].sort((a, b) => a - b));
console.log([1, 2, 111, 10, 5].sort((a, b) => b - a));
//  [ 1, 2, 5, 10, 111 ]

const nums = [1, 2, 111, 10, 5];

// console.log(nums.sort((a, b) => b - a));
// console.log(nums); // mutation (Y)

console.log(nums.toSorted((a, b) => b - a)); // [ 111, 10, 5, 2, 1 ]
console.log(nums); // mutation (N)

// JS -> Choose S1 or S2
// a - b -> Ascending
// b - a -> Descending
// 0 -> no change

const heroes = [
  { name: "Spider-Man", powerLevel: 4.5, team: "Avengers" },
  { name: "Star-Lord", powerLevel: 3.9, team: "Guardians" },
  { name: "Doctor Strange", powerLevel: 4.9, team: "Avengers" },
  { name: "Black Panther", powerLevel: 4.8, team: "Avengers" },
  { name: "Rocket", powerLevel: 4.7, team: "Guardians" },
];

// Sort them by powerLevel from Highest to lowest

// Expected output
// [
//  { name: "Doctor Strange", powerLevel: 4.9, team: "Avengers" },
//  { name: "Black Panther", powerLevel: 4.8, team: "Avengers" },
//  { name: "Rocket", powerLevel: 4.7, team: "Guardians" },
//   { name: "Spider-Man", powerLevel: 4.5, team: "Avengers" },
//   { name: "Star-Lord", powerLevel: 3.9, team: "Guardians" },
// ]

//Explore :Functional Programming
//Composing, Curry, Patial Application
const sorted = (marvel) => {
  //marvel.sort((a, b) => a.powerLevel - b.powerLevel);
  return marvel.toSorted((heroA, heroB) => heroB.powerLevel - heroA.powerLevel);
};
console.log(sorted(heroes));

const topHeroes = (marvel) => {
  return sorted(marvel)
    .map((hero) => hero.name)
    .toSpliced(3, 2);
};
console.log(topHeroes(heroes));
