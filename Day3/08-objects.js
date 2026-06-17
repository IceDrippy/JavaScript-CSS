// "Key": value -> "" is optional
// const petProfile = {
//     "name": 'fluffy',
//      "age": 3
// }

const petProfile = {
  name: "fluffy",
  age: 3,
  color: "white",
  "is Friendly": true,
  favoriteToy: "ball",
  legs: 4,
  owner: {
    name: "Qauyum",
    phone: "0783947000",
  },
  hobbies: ["walking 🐕", "fetch 🦴", "dance 🕺"],
  //   1: "abc",
};

//console.log(petProfile);

// Dot Notation
//console.log(petProfile.name);

// Bracket Notation
//console.log(petProfile["name"]);

// console.log(petProfile.is Friendly); ❌
//console.log(petProfile["is Friendly"]); // ✅

// console.log(petProfile[1]); // abc
// console.log(petProfile["1"]); // abc

//console.log(typeof petProfile); // object
//console.log(typeof petProfile.age); // number

petProfile.name = "fluffykins";
petProfile["color"] = "brown";

//console.log(petProfile);

const marks = [80, 90, 100, 60, 85];
marks[1] = 95;

//console.log(marks);

// fluffy birthday update the age by 1

//petProfile.age = petProfile + 1;

console.log(typeof petProfile.owner);
// console.log(petProfile.owner.name);
// console.log(petProfile["owner"]["name"]);
// console.log(petProfile.owner["name"]);
// console.log(petProfile["owner"].name);

console.log(petProfile.hobbies[1]);
console.log(petProfile["hobbies"].at(-2));
