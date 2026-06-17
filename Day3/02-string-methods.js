const quote2 = "     Failure is the first step to success      ";

//strings are immutable- original string canno be changed

//Solution 1
const trimQuote = quote2.trim();
console.log(trimQuote.toLowerCase());
//console.log((trimQuote + " ").repeat(10)); -repeat-> multiple times

//Solution 2 -> Dot Chaining
console.log(quote2.trim().toLowerCase());

//checks if string is part of the string at any point from start position indicated in search till end of string.
console.log(trimQuote.includes("s", 2));
