var PI_VALUE = 3.14; //CONST_CASE

var radius = prompt("Enter the radius: ");

//camelCase
var areaOfCircle = PI_VALUE * radius ** 2;
var perimeter = 2 * PI_VALUE * radius;

//console.log("Area is : " + areaOfCircle + "cm^2 && Perimeter is : " + perimeter + "cm");

//template literals
console.log(`The area is : ${areaOfCircle} cm^2`);

console.log(`the Perimeter is :${perimeter}cm`);

//console.log(typeof "Hello");
