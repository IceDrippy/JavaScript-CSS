// Task 1.1

const bunch1 = ["💐", "🌹"];
const bunch2 = ["🌻", "🌷", "🪷"];
// const luxuryBrand = {
//   name: "Rolex",
//   Category: "Watch",
//   price: 35000,
//   location: "London",

//   DOB: {
//     day: 12,
//     month: 3,
//     year: 2005,
//   },
// };

const bouquet = [...bunch1, ...bunch2];
//console.log(nums["1"].repeat(10));

//Taks 1.2

const newBouquet = [bunch1.at(0), ...bouquet];
console.log(newBouquet);
// console.log(luxuryBrand?.DOB?.day > 100 ? "Yeeee" : "Dummy");
