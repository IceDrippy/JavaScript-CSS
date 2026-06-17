const heroes = [
  { name: "Spider-Man", powerLevel: 4.1, team: "Avengers" },
  { name: "Star-Lord", powerLevel: 3.9, team: "Guardians" },
  { name: "Doctor Strange", powerLevel: 4.0, team: "Avengers" },
  { name: "Black Panther", powerLevel: 4.5, team: "Avengers" },
  { name: "Rocket", powerLevel: 4.0, team: "Guardians" },
];

//T 1.1

function getHeroNames(marvel) {
  const heroNames = [];
  for (let hero of marvel) {
    const { name, powerLevel, team } = hero;
    heroNames.push(name ?? "Missing ");
  }
  return heroNames;
}
console.log(getHeroNames(heroes));

// T 1.2
const avengers = (marvel) => {
  let avengerNames = [];
  for (let { name, powerLevel, team } of marvel) {
    if (team == "Avengers") {
      avengerNames.push(name);
    }
  }
  return avengerNames;
};

console.log(avengers(heroes));

//T 1.3

const strongestHeroes = (marvel) => {
  let theStrong = [];
  for (let hero of marvel) {
    const { name, powerLevel } = hero;
    if (powerLevel >= 4.7) {
      theStrong.push(name);
    }
  }
  if (theStrong.length >= 2) {
    return `
      Case 3:
      There are two or more top heroes :
      Top heroes are : ${[...theStrong].join(", ")}`;
  } else if (theStrong.length == 1) {
    return `
      There is only one
      Top hero : ${[...theStrong].join(", ")}`;
  } else {
    return `
      There are no heroes with powerLevel >= 4.7
      No legendary heroes available.`;
  }

  //   return theStrong.length >= 2
  //     ? `Case 3:
  //      There are two or more top heroes :
  //      Top heroes are : ${[...theStrong].join(", ")}`
  //     : theStrong.length == 1
  //       ? `There is only one
  //      Top hero : ${[...theStrong].join(", ")}`
  //       : `There are no heroes with powerLevel >= 4.7
  //      No legendary heroes available.`;
};
console.log(strongestHeroes(heroes));
