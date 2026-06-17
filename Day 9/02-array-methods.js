//Immutability

// Task 1.1 -slice()
const testArray = [10, 5, 4, 6, 3]; //const -> immutable

testArray.slice(0, 3); //Mutation(N)  / Returns-> object(same)  //remains the same

//task 1.2 -check for .reverse() /toReverse()

//testArray.reverse();                   //not immutable since it reverses. returns -> reference to array object
//console.log(testArray.toReversed());   // Mutation(N)  / immutable (Y) / returns -> reference to object

//Task 1.3 -check for .unshift()
//testArray.unshift(12, 87, 9, 45); // Not immutable. returns -> new length .Mutation(Y)

//Task 1.4  ..splice() /toSpliced()

//testArray.splice(1, 0, 100); //Mutation(Y) , immutable(N)  returns-> new array object
console.log(testArray.toSpliced(1, 0, 100));
