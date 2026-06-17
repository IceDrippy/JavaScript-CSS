// Task 1.1 - Plan to go to party
// noOfPersons 2 or below -> Lets take 🛵
// noOfPersons 3 or above -> Lets take 🚘
// noOfPersons get from user

const noOfPersons = prompt("How many ppl are c=going to the party ?");

if (noOfPersons <= 2) {
  console.log("Lets take the 🏍️ to the party. ");
} else {
  console.log("Lets take the whip(🚗) to the party.");
}
