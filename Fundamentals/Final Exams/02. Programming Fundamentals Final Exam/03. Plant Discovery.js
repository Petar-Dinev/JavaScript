function solve(input) {
  let plantsNum = Number(input.shift());
  let plants = {};

  for (let i = 0; i < plantsNum; i++) {
    let [plant, rarity] = input.shift().split("<->");
    rarity = Number(rarity);

    if (plants[plant] == undefined) {
      plants[plant] = {
        rarity,
        ratings: [],
        avgRating: function () {
          let avgRating = 0;
          this.ratings.forEach((x) => (avgRating += x));
          avgRating = avgRating ? avgRating / this.ratings.length : 0;
          return avgRating.toFixed(2);
        },
      };
    } else {
      plants[plant].rarity = rarity;
    }
  }

  while (input[0] != "Exhibition") {
    let [command, plantInfo] = input.shift().split(": ");
    let [name, arg1] = plantInfo.split(" - ");
    let plant = plants[name];
    if (plant) {
      if (command == "Rate") {
        plant.ratings.push(Number(arg1));
      } else if (command == "Update") {
        plant.rarity = Number(arg1);
      } else if (command == "Reset") {
        plant.ratings.length = 0;
      }
    } else {
      console.log("error");
    }
  }

  console.log("Plants for the exhibition:");
  for (let [plant, plantInfo] of Object.entries(plants)) {
    console.log(
      `- ${plant}; Rarity: ${plantInfo.rarity}; Rating: ${plantInfo.avgRating()}`
    );
  }

  //   console.log(plants);
}

solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
