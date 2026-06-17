const pets = [
  { name: "Fluffy", age: 3 },
  { name: "barbarian", age: 5 },
  { name: "buddy", age: 1 },
];
console.log(`The ${pets[2].name}'s age is ${pets[2].age}`);
console.log(`The ${pets[2]["name"]}'s age is ${pets[2]["age"]}`);
