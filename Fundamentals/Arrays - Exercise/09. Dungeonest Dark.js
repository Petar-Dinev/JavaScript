function dungeonestDark(input) {
  let rooms = input[0].split("|");
  let health = 100;
  let coins = 0;

  for (let i = 0; i < rooms.length; i++) {
    let [object, quantity] = rooms[i].split(" ");
    quantity = Number(quantity);

    let isDie = false;

    switch (object) {
      case "potion":
        let healed = quantity + health > 100 ? 100 - health : quantity;
        health += healed;
        console.log(`You healed for ${healed} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        coins += quantity;
        console.log(`You found ${quantity} coins.`);
        break;
      default:
        health -= quantity;
        if (health > 0) {
          console.log(`You slayed ${object}.`);
        } else {
          console.log(`You died! Killed by ${object}.`);
          console.log(`Best room: ${i + 1}`);
          isDie = true;
        }
    }
    if (isDie) {
      break;
    }
  }

  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
