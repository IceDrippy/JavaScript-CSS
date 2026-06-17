//- 0.1 + 0.2 = 0.30000000000000004 - Why? - In markdown format - github

//1.1

//1.2
//Option 1
const userFlavour = prompt("What flavor do you want: ");
let flavors = ["vanilla", "Butterscotch", "cotton candy", "chocolate"];
if (
  userFlavour == "vanilla" ||
  userFlavour == "chocolate" ||
  userFlavour == "butterscotch" ||
  userFlavour == "cotton candy"
) {
  let available = Math.floor(Math.random() * 2);
  if (available == 0) {
    console.log(`Sorry we dont have ${userFlavour} in stock`);
  } else if (available == 1) {
    console.log(`Yes we have ${userFlavour} in stock`);
  } else {
    console.log("Invalid stock entered ,Pls enter a valid stock");
    var again = prompt("What flavor do you want: ");
  }
}

//Option2
if (flavors.includes[userFlavour]) {
  console.log(`Yes we have ${userFlavour} in stock`);
} else {
  console.log(`No we dont have ${userFlavour} in stock`);
}
