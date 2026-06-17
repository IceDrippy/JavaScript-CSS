// //1.1

// let numHearts = 1;
const heart = "❤️ ";
// while (numHearts <= 5) {
//   console.log(heart.repeat(numHearts));
//   numHearts = numHearts + 1;
// }

//1.2

let count;
for (count = 1; count <= 5; count++) {
  console.log(heart.repeat(count));
}

//1.3 -Option 1

// function printPattern(userInput) {
//   const [emoji, numRows] = userInput();
//   for (let count = 1; count <= numRows; count++) {
//     console.log(emoji.repeat(count));
//   }
// }

// function userInput() {
//   let emoji = prompt("Enter an emoji: ")?.trim(); //prevents null values when calling trim
//   let numRows = +prompt(`Enter number of rows for ${emoji}: `)?.trim();

//   return [emoji, numRows];
// }

//1.3 | 1.4 - Option

printPattern(userInput);
