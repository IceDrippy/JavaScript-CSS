async function getRecipeIdsFromIng(ingredient) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await res.json();

    if (!data.meals) return [];

    return data.meals.slice(0, 6).map((meal) => meal?.idMeal);
  } catch (error) {
    console.error("Error fetching recipe IDs:", error);
    return [];
  }
}

async function getMealDetails(mealIds) {
  try {
    const allPromises = mealIds.map(async (id) => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      return res.json();
    });

    const results = await Promise.all(allPromises);

    return results.map((data) => {
      const meal = data?.meals?.[0];
      return {
        name: meal?.strMeal,
        tutorial: meal?.strYoutube,
        thumbnail: meal?.strMealThumb,
        area: meal?.strArea,
      };
    });
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return [];
  }
}

function displayRecipes(recipes) {
  const grid = document.querySelector("#recipes-grid");
  if (grid) {
    grid.innerHTML = recipes.map(createRecipeCard).join("");
  }
}

function createRecipeCard({ thumbnail, name, area, tutorial }) {
  return `
    <div class="card-container">
      <img src="${thumbnail}" alt="${name}" />
      <div class="card-content-container">
        <h3>${name}</h3>
        <div class="tags-container">
          <span class="tag">Chicken</span>
          <span class="tag">${area || "Universal"}</span>
        </div>
        <a href="${tutorial}" target="_blank" class="watch-btn">Watch Recipe</a>
      </div>
    </div>  
  `;
}

async function main() {
  const mealIds = await getRecipeIdsFromIng("chicken");

  if (mealIds.length > 0) {
    const recipes = await getMealDetails(mealIds);
    displayRecipes(recipes);
  }
}

main();
