function counterStrike(input) {
  let energy = Number(input.shift());
  let atacks = 0;
  let distance = input.shift();

  while (distance != "End of battle") {
    distance = Number(distance);
    if (distance <= energy) {
      energy -= distance;
      atacks++;
    } else {
      console.log(
        `Not enough energy! Game ends with ${atacks} won battles and ${energy} energy`
      );
      break;
    }

    if (atacks % 3 == 0) {
      energy += atacks;
    }
    if (energy) {
    }

    distance = input.shift();
  }
  if(energy) {
    console.log(`Won battles: ${atacks}. Energy left: ${energy}`);
  }
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
