var temperature = prompt("Enter the temperature in celcius: ");

console.log("Temperature in celcius is " + CON_TEMP);

var Ferenheit = (CON_TEMP * 9) / 5 + 32;

console.log("The temperature is " + CON_TEMP + "'C is " + Ferenheit + "'F");

var fullName = prompt("Enter your name: ");

//1
console.log("Hello, " + fullName + " 🥳");

//Interpolation-substitution
console.log(`Hello, ${fullName} 🥳🥳`);
