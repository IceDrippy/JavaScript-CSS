// Task 1.1

// const snacks = ["Biltong 🥩", "Milk Tart 🍰 ", "Koeksister 🍯"];

// const [snack1, snack2, snack3] = snacks;
// console.log(`${snack1}
// ${snack2}
// ${snack3.toUpperCase()}

// Most wanted snack today is ${snack2}`);

//1.2

// const student = {
//   name: "lauren ✨",
//   city: "cape town 🌊",
//   hobby: "coding 💻",
// };

// const { name, city, hobby } = student;

// console.log(`
// ${name.toUpperCase()} is here!
// ${name.toUpperCase()} joins us from ${city}
// Favorite thing to do: ${hobby}
// Yes, ${name} really likes ${hobby}`);

//1.3

// const student1 = {
//   name1: "qauyum 🚀",
//   city1: "durban 🌴",
//   hobby1: "gaming 🎮",
// };

// const {
//   name1,
//   city1,
//   hobby1,
//   nickname = "Code Champ🏆",
//   track = "full stack⚡",
// } = student1;

// console.log(`
// Student Rescue Card
// ${name1}
// ${city1}
// ${nickname}
// ${track.toUpperCase()}

// ${name1} is also known as ${nickname}
// ${nickname} is ready for the ${track.toUpperCase()} journey!`);

//1.4

// const student = {
//   name: "thembelihle 💫",
//   track: "frontend wizard 🎨",
//   badge: "rising star 🌟",
// };

// const { name: studentName, track: studentTrack, badge: studentBadge } = student;

// console.log(`
// Student Profile
// Name : ${studentName}
// Track : ${studentTrack.toUpperCase()}
// Badge : ${studentBadge}

// ${studentName} is ready for the ${studentTrack} journey!`);

//1.5

// const student = {
//   name: "murangi 🔥",
//   address: {
//     city: "johannesburg 🏙️",
//     province: "gauteng 📍",
//   },
//   hobbies: ["rugby 🏉", "chess ♟️", "music 🎵"],
// };

// const { name } = student;
// const { city, province } = student.address;
// const [hobby1, , hobby3] = student.hobbies;

// console.log(`
// ${name} is from ${city} , ${province}
// ${name} enjoys ${hobby1}
// Creative side unlocked : ${hobby3.toUpperCase()}`);

//1.6

// const student = {
//   name: "noloyiso 🌟",
//   address: {
//     city: "bellville 🏡",
//     province: "western cape 🌍",
//   },
//   hobbies: ["debating 🎤", "cricket 🏏", "photography 📸"],
//   marks: {
//     html: 78,
//     css: 84,
//     js: 91,
//   },
// };

// const { name } = student;
// const { city, province } = student.address; // is it allowed?
// const [, hobby2] = student.hobbies;
// const { html, css, js } = student.marks;

// console.log(`
// ${name}
// ${city}
// ${hobby2}
// Scores :CSS -${css} | JS -${js}

// ${name} is doing well, and ${name} seems to love ${hobby2}`);

//1.7

// const student = {
//   name: "anganathi 🎯",
//   marks: {
//     js: 52,
//   },
//   mentor: {
//     name: "Coach Zee 🧑‍🏫",
//   },
//   nickname: null,
//   reward: "Extra Lab Time 🧪",
// };

// const {
//   name,
//   marks,
//   mentor,
//   nickname,
//   reward,
//   result = "Practice More 💻",
// } = student;

// console.log(`
// ${name}
// ${student?.nickname ?? "Code Rookie 🐣"}
// ${student?.mentor?.name}
// ${result}
// ${reward}

// ${name} got ${result} and ${name} can still claim ${reward}`);

//1.8
