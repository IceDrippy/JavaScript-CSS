console.log("APIs");

// Treat as JSON convert to JS object
// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pancake")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.meals);
//     const result = data.meals.map((meal) => meal.strMeal);
//     console.log(result);
//   });

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pancake")
//   .then((response) => response.json())
//   .then((data) => data.meals.map((meal) => meal.strMeal))
//   .then((result) => console.log(result));

// Transform - Array of object to   Array of string

// API -> JSON (Not all)
// API -> Text, XML, Form data

// Clue: Array methods - map
// Task 1.1 - Provide the pancake dish names in array
// [ 'Pancakes', 'Blini Pancakes', 'Banana Pancakes', ....]

// Task 1.2 - Print the array with noodles which are Seafood category
// [
//   "Laksa King Prawn Noodles",
//   "Spicy Thai prawn noodles",
//   "Singapore Noodles with Shrimp",
// ];

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=noodles")
//   .then((response) => response.json())
//   .then((data) =>
//     data.meals.filter((meal) => meal?.strCategory?.toLowerCase() == "seafood"),
//   )
//   .then((data) => data.map((meal) => meal.strMeal))
//   .then((result) => console.log(result));

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=noodles")
//   .then((response) => response.json())
//   .then((data) =>
//     data.meals
//       .filter((meal) => meal?.strCategory?.toLowerCase() == "seafood")
//       .map((meal) => meal?.strMeal),
//   )
//   .then((result) => console.log(result));

// Task 1.3 - Clue: second arg of map (mdn)
// Output - must be one string (Sorted by name & only pancakes for Breakfast)
// 1. Dutch poffertjes (mini pancakes)
// 2. Flija Layered Pancake / Crepe
// 3. Oatmeal pancakes

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pancake")
//   .then((response) => response.json())
//   .then((data) =>
//     data.meals
//       .filter((meal) => meal?.strCategory?.toLowerCase() == "breakfast")
//       .map((meal) => meal?.strMeal) // Array of strings
//       .toSorted() // Asc
//       .map((mealName, index) => `${index + 1}. ${mealName}`) // Numbering
//       .join("\n"), // one string
//   )
//   .then((result) => console.log(result));

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pancake")
//   .then((response) => response.json())
//   .then(
//     (data) =>
//       data.meals
//         .filter((meal) => meal?.strCategory?.toLowerCase() == "breakfast")
//         .toSorted((mealA, mealB) => mealA.strMeal.localeCompare(mealB.strMeal)) // Array of objects
//         .map((meal, index) => `${index + 1}. ${meal?.strMeal}`) // Numbering
//         .join("\n"), // one string
//   )
//   .then((result) => console.log(result));

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pancake")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.meals);
//     const result = data.meals.map((meal) => meal.strMeal);
//     console.log(result);
//   });

// Assignment
// Happy Bafana Bafana Day - Task - Into Promises

// Task 1.4
// Create a ordered list of all pancakes (sorted alphabetically) and display on the screen (not in console)

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pancake")
//   .then((response) => response.json())
//   .then((data) =>
//     data.meals
//       .map((meal) => meal?.strMeal)
//       .toSorted()
//       .map((mealName) => `<li>${mealName}</li>`)
//       .join(""),
//   )
//   .then((result) => {
//     console.log(result);
//     document.querySelector("ol").innerHTML = result;
//   });

// Promise + Array + DOM
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pancake")
  .then((response) => response.json())
  .then((data) =>
    data.meals
      .toSorted((mealA, mealB) => mealA.strMeal.localeCompare(mealB.strMeal)) // Array of objects
      .map((meal) => `<li>${meal?.strMeal}</li>`)
      .join(""),
  )
  .then((result) => {
    console.log(result);
    document.querySelector("ol").innerHTML = result;
  });
