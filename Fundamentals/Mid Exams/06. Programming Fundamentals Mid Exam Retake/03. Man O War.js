function manOfWar(input) {
  let pirateShip = input.shift().split(">").map(Number);
  let warShip = input.shift().split(">").map(Number);
  let maxHealthPerSectionOfPirateShip = Number(input.shift());
  let pirateShipSink = false;
  let warShipSink = false;

  let commands = {
    Fire: fire,
    Defend: defend,
    Repair: repair,
    Status: statuss,
  };

  while (input[0] != "Retire") {
    let [command, p1, p2, p3] = input.shift().split(" ");
    p1 = Number(p1);
    p2 = Number(p2);
    p3 = Number(p3);

    commands[command](p1, p2, p3);

    if (pirateShipSink || warShipSink) {
      break;
    }
  }

  if (!pirateShipSink && !warShipSink) {
    console.log(`Pirate ship status: ${shipStatus(pirateShip)}`);
    console.log(`Warship status: ${shipStatus(warShip)}`);
  }

  function shipStatus(arr) {
    let sum = 0;
    for (let el of arr) {
      sum += el;
    }
    return sum;
  }

  function fire(index, dmg) {
    if (index >= 0 && index < warShip.length) {
      warShip[index] -= dmg;
      if (warShip[index] <= 0) {
        console.log("You won! The enemy ship has sunken.");
        warShipSink = true;
      }
    }
  }

  function defend(startIndex, endIndex, dmg) {
    if (
      startIndex >= 0 &&
      startIndex < pirateShip.length &&
      endIndex >= 0 &&
      endIndex < pirateShip.length
    ) {
      for (let i = startIndex; i <= endIndex; i++) {
        pirateShip[i] -= dmg;
        if (pirateShip[i] <= 0) {
          console.log("You lost! The pirate ship has sunken.");
          pirateShipSink = true;
          break;
        }
      }
    }
  }

  function repair(index, health) {
    if (index >= 0 && index < pirateShip.length) {
      pirateShip[index] += health;
      if (pirateShip[index] > maxHealthPerSectionOfPirateShip) {
        pirateShip[index] = maxHealthPerSectionOfPirateShip;
      }
    }
  }

  function statuss() {
    let count = 0;
    for (let el of pirateShip) {
      if (el < maxHealthPerSectionOfPirateShip * 0.2) {
        count++;
      }
    }
    console.log(`${count} sections need repair.`);
  }
}

manOfWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);

manOfWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
