console.log(1);

// async - Macro Task Q
setTimeout(() => {
  console.log(2);
}, 0);

// async
// VIP - Micro Task Q - Higher Priority
Promise.resolve(4).then((x) => console.log(x));
Promise.resolve(5).then((x) => console.log(x));

console.log(3);

// Assumption
// 1 3 2 4 5

// Why? ✅
// 1 3 4 5 2
