function arenaTier(input) {
  let result = {};

  while (input[0] != "Ave Cesar") {
    let line = input.shift();
    if (line.includes("vs")) {
      let [firstHero, secondHero] = line.split(" vs ");
      if (result[firstHero] != undefined && result[secondHero] != undefined) {
        let skillsOfFirst = Object.keys(result[firstHero]);
        let skillsOfSecond = Object.keys(result[secondHero]);
        let commonSkill;
        for (let i = 1; i < skillsOfFirst.length; i++) {
          for (let k = 1; k < skillsOfSecond.length; k++) {
            if (skillsOfFirst[i] == skillsOfSecond[k]) {
              commonSkill = skillsOfFirst[i];
              break;
            }
          }
        }
        if (commonSkill) {
          if (
            result[firstHero][commonSkill] > result[secondHero][commonSkill]
          ) {
            delete result[secondHero];
          } else {
            delete result[firstHero];
          }
        }
      }
    } else {
      let [name, skill, power] = line.split(" -> ");
      power = Number(power);
      if (result[name] == undefined) {
        result[name] = { totalPower: 0 };
      }
      if (result[name][skill] == undefined) {
        result[name][skill] = power;
        result[name].totalPower += power;
      } else {
        let currentPower = result[name][skill];
        if (currentPower < power) {
          result[name][skill] = power;
          result[name].totalPower += power - currentPower;
        }
      }
    }
  }

  let sortedHeroes = Object.entries(result).sort(
    (a, b) => b[1].totalPower - a[1].totalPower || a[0].localeCompare(b[0])
  );

  for (let [hero, skills] of sortedHeroes) {
    console.log(`${hero}: ${skills.totalPower} skill`);
    delete skills.totalPower;
    let sortedSkills = Object.entries(skills).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    );
    for (let [skill, power] of sortedSkills) {
      console.log(`- ${skill} <!> ${power}`);
    }
  }
}

// arenaTier([
//   "Peter -> BattleCry -> 400",
//   "Alex -> PowerPunch -> 300",
//   "Stefan -> Duck -> 200",
//   "Stefan -> Tiger -> 250",
//   "Ave Cesar",
// ]);

arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
