//

// Task 1.1

function task1() {
  const mealIds = ["53016", "52875", "53206"];
  // www.themealdb.com/api/json/v1/1/lookup.php?i=53016

  //  str -> Promise
  let P1 = fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealIds[0]}`,
  ).then((res) => res.json());

  let P2 = fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealIds[1]}`,
  ).then((res) => res.json());

  let P3 = fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealIds[2]}`,
  ).then((res) => res.json());

  Promise.all([P1, P2, P3])
    .then(
      (result) =>
        result.map((data) => ({
          name: data?.meals[0]?.strMeal,
          tutorial: data?.meals[0]?.strYoutube,
        })), // Transformed
    )
    .then((result) => console.log(result));
}
const mealIds = ["53016", "52875", "53206"];
function task1_2(mealIds) {
  const allPromises = mealIds.map((id) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(
      (res) => res.json(),
    ),
  );

  Promise.all(allPromises)
    .then(
      (result) =>
        result.map((data) => ({
          name: data?.meals[0]?.strMeal,
          tutorial: data?.meals[0]?.strYoutube,
        })), // Transformed
    )
    .then((result) => console.log(result));
}

task1_2(mealIds);

// Output

// [
//     {
//         name: 'Chick-Fil-A Sandwich',
//         tutorial: 'https://www.youtube.com/watch?v=1WDesu7bUDM'
//     },
//     ...
// ]

// Task 1.2
// Write a function to get the first 3 recipes name & youtube link given the ingredient

function getRecipeIdsFromIng(ingredient) {}

getRecipeIdsFromIng("chicken breast");

// [
//     {
//         name: 'Bengali Chicken Curry with Potatoes',
//         thumbnail: ''
//         tutorial: ''
//     },
//     ...
// ]

// Filter by ingredient
// https://www.themealdb.com/api/json/v1/1/filter.php?i=onion

// Full Details of recipe
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=53016
