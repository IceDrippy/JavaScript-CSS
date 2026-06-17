const userFlavour = prompt("What flavor do you want: ").trim().toLowerCase();
const flavor = userFlavour;
let flavors = ["vanilla", "Butterscotch", "cotton candy", "chocolate"];

if (flavors.includes(flavor)) {
  console.log(`Yes we have ${flavor} in stock`);
} else {
  console.log(`No we don't have ${flavor} in stock`);
}
