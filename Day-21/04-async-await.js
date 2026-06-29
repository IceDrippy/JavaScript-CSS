function task1() {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pancake")
    .then((response) => response.json())
    .then((data) => data.meals.map((meal) => meal.strMeal))
    .then((result) => console.log(result));
}

// task1();

// Webapi
// Async / Await - To make Async code look like Sync
// Put `await` in front of a promise
// await - inform webapi its an async fn
async function task1New() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=pancake",
  );

  const data = await response.json();
  const result = data.meals.map((meal) => meal.strMeal);
  console.log(result);
}
task1New();

async function task1_2(mealIds) {
  const allPromises = mealIds.map((id) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(
      (res) => res.json(),
    ),
  ); // Dail the number

  const result = await Promise.all(allPromises); // Press the call button

  const output = result.map((data) => ({
    name: data?.meals[0]?.strMeal,
    tutorial: data?.meals[0]?.strYoutube,
  })); // Transformed

  console.log(output);
}

task1_2(mealIds);

async function task3() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=pancake",
  );
  const data = await response.json();

  const result = data.meals
    .filter((meal) => meal?.strCategory?.toLowerCase() == "breakfast")
    .map((meal) => meal?.strMeal) // Array of strings
    .toSorted() // Asc
    .map((mealName, index) => `${index + 1}. ${mealName}`) // Numbering
    .join("\n");

  console.log(result);
}
