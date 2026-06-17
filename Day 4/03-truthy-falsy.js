//const rubyTeam = null;

const rugbyTeam = {
  name: "sharks",
  captain: "Cristino",
  color: "black",
  stats: {
    win: 4,
    loss: 8,
  },
};

console.log(`Total wins: ${rugbyTeam?.stats?.win ?? "missing 🤷‍♂️"}`);

// if (rugbyTeam) {
//   console.log("rugby Team data is present");

//   if (rugbyTeam.stats) {
//     console.log("Stats data is present");

//     if (rugbyTeam.stats["win"]) {
//       console.log("Total wins : " + rugbyTeam.stats.win);
//     } else {
//       console.log("Winning data missing");
//     }
//   } else {
//     console.log("Winning data is missing");
//   }
// } else {
//   console.log("Winning data is missing");
// }
