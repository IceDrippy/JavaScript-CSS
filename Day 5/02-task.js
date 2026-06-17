//1.1
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;

console.log(user1?.age);
console.log(user2?.age);
console.log(user3?.age ?? "Age is missing");

//1.2
const settings1 = { theme: "dark" };
const settings2 = { theme: null };
const settings3 = { theme: undefined };
const settings4 = {};

console.log(settings1["theme"]);
console.log(settings2?.theme ?? "light");
console.log(settings3?.theme ?? "light");
console.log(settings4?.theme ?? "light");

//1.3

const person1 = { name: "Jane", active: true };
const person2 = { name: "John", active: false };
const person3 = { name: "Alice", active: null };

// const test1 =
//   person1.active == true
//     ? `${person1.name} .is currently active`
//     : `${person1.name} .is currently inactive`;
// const test2 =
//   person2.active == true
//     ? `${person2.name} .is currently active`
//     : `${person2.name} .is currently inactive`;
// const test3 =
//   person3.active == true
//     ? `${person3.name} .is currently active`
//     : `${person3.name} .is currently inactive`;

// console.log(`${test1}
// ${test2}
// ${test3}`);

console.log(
  `${person1.name} is currently ${person1?.active ? "active" : "inactive"}`,
);

console.log(
  `${person2.name} is currently ${person2?.active ? "" : "in"}active`,
);

console.log(
  `${person3.name} is currently ${person3?.active ? "" : "in"}active`,
);

// ?. optional chaining
// ?? -> nullish
// ? -> ternary
