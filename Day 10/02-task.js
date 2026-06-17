const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

// Write `getFirstNDishNames(orderList, n)`.

// ```js
// console.log(getFirstNDishNames(orders, 3));
// // Burger, Pizza, Sushi

// console.log(getFirstNDishNames(orders, 1));
// // Burger

function getFirstNDishNames(orderList, n) {
  const orders = orderList.slice(0, n);
  const variables = orders.map((order) => {
    const { dishName } = order;
    return dishName;
  });
  return variables.join(", ");
}
console.log(getFirstNDishNames(orders, 3));
