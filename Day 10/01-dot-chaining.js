// const heroes = [
//   { name: "Spider-Man", powerLevel: 4.5, team: "Avengers" },
//   { name: "Star-Lord", powerLevel: 3.9, team: "Guardians" },
//   { name: "Doctor Strange", powerLevel: 4.9, team: "Avengers" },
//   { name: "Black Panther", powerLevel: 3.8, team: "Avengers" },
//   { name: "Rocket", powerLevel: 4.7, team: "Guardians" },
// ];

// // Task 1.1 - Check for if all powerlevel is more than 4
// // If yes -> Our team is ready |  No -> More prep is needed

// const answer = heroes.every((hero) => hero.powerLevel > 4);
// console.log(answer);

// // Task 1.2 -  (Task 1.1 + Destructuring) - Done

// const answer1 = heroes.every((hero) => {
//   const { name, powerLevel, team } = hero;
//   return hero?.powerLevel > 4;
// });

// console.log(answer1);
