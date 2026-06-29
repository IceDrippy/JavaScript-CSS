let input = "";
if (input || "default") {
  console.log("Value exists");
} else {
  console.log("No value");
}

let x = { name: "John" };
let y = { ...x };
y.name = "Doe";
console.log(x.name);

// ?. - optional chaining
// ?? - nullish
const data = { settings: null };
console.log(data.settings?.theme ?? "default");

console.log("i'm a lasagna hog".split("").reverse().join(""));

// ['i', "'", 'm'].reverse()

("goh angasal a m'i");

// What are do & don't of numeric separator

const book1 = {
  authorAge: 45,
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
};

const details1 = {
  year: 2002,
  price: 1200,
  authorAge: 55,
};

const fullDetails3 = { ...details1, ...book1 };

console.log(fullDetails3);

const [f1, f2 = "💐", , f4 = "🌸"] = ["🌼", "🌹", "🌺", null];

console.log(f1, f2, f4);

const packBag = (name = "Anon", ...items) =>
  !items.length
    ? `🎒 ${name}'s bag is empty.`
    : `🎒 ${name}'s bag contains: ${items.join(", ")}`;

console.log(packBag("Nolo"));

var price = 400;

function getPrice() {
  console.log("The old price: ", price); // undefined
  var price = 500; // shadowing outside the variable
  console.log("The new price: ", price); // 500
}

getPrice();

const arr = [1, 3, 100, 4];
console.log(
  arr
    .toSorted((a, b) => b - a) // [100, 4, 3, 1]
    .toSpliced(2, 3, 4) //  [100, 4, 4]
    .toReversed() // [4, 4, 100]
    .slice(3, 5) // []
    .join(" | "), // ""
);
