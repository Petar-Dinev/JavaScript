function pirates(input) {
  let towns = {};
  while (input[0] != "Sail") {
    let [town, people, gold] = input.shift().split("||");
    people = Number(people);
    gold = Number(gold);
    if (towns[town] == undefined) {
      towns[town] = { people, gold };
    } else {
      towns[town]["people"] += people;
      towns[town]["gold"] += gold;
    }
  }
  input.shift();
  while (input[0] != "End") {
    let [command, town, arg1, arg2] = input.shift().split("=>");

    let obj = towns[town];
    if (command == "Plunder") {
      let people = Number(arg1);
      let gold = Number(arg2);
      obj.people -= people;
      obj.gold -= gold;
      console.log(
        `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
      if (obj.gold == 0 || obj.people == 0) {
        delete towns[town];
        console.log(`${town} has been wiped off the map!`);
      }
    } else if (command == "Prosper") {
      let gold = Number(arg1);
      if (gold < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        obj.gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${obj.gold} gold.`
        );
      }
    }
  }
  let townsArr = Object.entries(towns);
  if (townsArr.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${townsArr.length} wealthy settlements to go to:`
    );
    for (let [town, info] of townsArr) {
      console.log(
        `${town} -> Population: ${info.people} citizens, Gold: ${info.gold} kg`
      );
    }
  } else {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  }
}

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
