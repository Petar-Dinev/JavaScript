function carWash(input) {
  let cleanPercent = 0;
  let length = input.length;

  for (let i = 0; i < length; i++) {
    let command = input.shift();
    switch (command) {
      case "soap":
        cleanPercent += 10;
        break;
      case "water":
        cleanPercent *= 1.2;
        break;
      case "vacuum cleaner":
        cleanPercent *= 1.25;
        break;
      case "mud":
        cleanPercent *= 0.9;
        break;
    }
  }

  console.log(`The car is ${cleanPercent.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
