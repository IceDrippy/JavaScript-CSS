// var a = 50;
// var b = 40;
// var c = a + b; // logic

// console.log(c);

// var a1 = 90;
// var b1 = 10;

// var c1 = a1 + b1; // logic
// console.log(c1);

// DRY

// Logic

// Why Functions?
// 1. Reuse (logic)
// 2. Maintaining Code is easier (All is one place)
// 3. Extending Code is easier

// param1, param2
// function sum(a = 0, b = 0) {
//   console.log("a", a, "b", b);

//   const total = sum?.a ? (a + b).toFixed(2) : 0.0;
//   return `The total is R${total}`;
// }

//Arrow Function -Task 1.0
const sum = (a = 0, b = 0) =>
  // const total = (a + b).toFixed(2);
  // return `the total is R${total}.`
  `The total is R${(a + b).toFixed(2)}`;
// Start
// const c2 = sum(50, 40); // Call
// const c3 = sum(90, 10);
// const c4 = sum(90.67, 5.7834); // arg1, arg2
// const c5 = sum(90.67); // arg1 // Case 2

// Task 1.0 - The total is R0.00
console.log(sum(10, 5)); // Zero args
// Case 1:
// No. of arg == No. of params

//console.log(c5);

// Case 2:
// No. of arg < No. of params

// console.log(c2);
// console.log(c3);
// console.log(c4);

//1.1

// function moodReport(emoji = "😐", time = "morning") {
//   return `Feeling ${emoji} this ${time}`;
// }

//Arrow Function -Task 1.1
const moodReport = (emoji = "😐", time = "afternoon❄️ ") =>
  `Feeling ${emoji} this ${time} .`;

//Function Expression - Task 1.1
// const moodReport = (emoji = "😐", time = "evening 🌃") => {
//   return `Feeling ${emoji} this ${time} .`;
// };

console.log(moodReport("😇", "morning ☀️"));

function checkAgeCategory(age = 18) {
  const young = "🧒 Minor";
  const adult = "🧔‍♂️ Adult";
  const old = "👴 Senior";

  //1.2
  const checkAge = age < 18 ? young : 18 <= age && age < 40 ? adult : old; //Yayyyyyyyyy!!!!
  return checkAge;
}

console.log(checkAgeCategory());

//1.3

// function introduceWizard(wizardObj) {
//   //introduceWizard({name , title ,etc ...})
//   const {
//     name,
//     title,
//     wand: { core },
//   } = wizardObj;
//   return `${title} ${name} wields a wand with ${core}.`;
// }

//Arrow Function -Task 1.3
const introduceWizard = ({ name, title, wand: { core } }) =>
  `${title} ${name} weilds a wand with ${core} .`;

const qau = {
  name: "🪄  Qauyum",
  title: "Archmage",
  wand: {
    core: "Phoenix Feather 🐦‍🔥",
  },
};

console.log(introduceWizard(qau));

//1.4

function mergeInventory(existing, incoming) {
  const shelf = existing;
  const delivery = incoming;
  const merge = [...shelf, ...delivery];
  return merge;
}

console.log(mergeInventory(["M"], ["O"]));

//1.5

const packBag = (owner = "Anon", ...items) =>
  `${owner}'s bag ${items.length == 0 ? " is empty" : `contains ${items.join(", ")}`}`;

console.log(packBag());
console.log(packBag("Natasha", ["M", "T", "I"]));
