function shootForTheWin(input) {
  let targets = input.shift().split(" ").map(Number);
  let currentIndex = input.shift();

  while (currentIndex != "End") {
    currentIndex = Number(currentIndex);
    if (targets[currentIndex] != undefined) {
      let targetValue = Number(targets[currentIndex]);
      targets[currentIndex] = -1;

      for (let i = 0; i < targets.length; i++) {
        if (targets[i] <= targetValue && targets[i] != -1) {
          targets[i] += targetValue;
        } else if (targets[i] > targetValue && targets[i] != -1) {
          targets[i] -= targetValue;
        }
      }
    }

    currentIndex = input.shift();
  }

  let shootTargets = 0

  for(let target of targets) {
    if(target == -1) {
        shootTargets++;
    }
  }

  console.log(`Shot targets: ${shootTargets} -> ${targets.join(" ")}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
