function treasureHunt(input) {
  let treasureChest = input.shift().split("|");

  while (input[0] != "Yohoho!") {
    let [command, ...params] = input.shift().split(" ");

    if (command == "Loot") {
      for (let el of params) {
        if (!treasureChest.includes(el)) {
          treasureChest.unshift(el);
        }
      }
    } else if (command == "Drop") {
      if (params[0] >= 0 && params[0] < treasureChest.length) {
        let itemToRemove = treasureChest.splice(params[0], 1);
        treasureChest.push(itemToRemove[0]);
      }
    } else if (command == "Steal") {
        let index = treasureChest.length - params[0]
        if(index < 0) {
            index = 0;
        }
      let stolenItems = treasureChest.splice(
        index,
        params[0]
      );
      console.log(stolenItems.join(", "));
    }
  }

  let avgLength = 0;
  for (let el of treasureChest) {
    avgLength += el.length;
  }
  avgLength /= treasureChest.length;
  if (treasureChest.length > 0) {
    console.log(
      `Average treasure gain: ${avgLength.toFixed(2)} pirate credits.`
    );
  } else {
    console.log("Failed treasure hunt.");
  }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
