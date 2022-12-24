function movingTarget(input) {
  let targets = input.shift().split(" ").map(Number);
  let currentLine = input.shift();

  while (currentLine != "End") {
    let [command, index, value] = currentLine.split(" ");
    index = Number(index);
    value = Number(value);
    let isValidIndex = false;
    if (index >= 0 && index < targets.length) {
      isValidIndex = true;
    }
    switch (command) {
      case "Shoot":
        if (isValidIndex) {
          targets[index] -= value;
        }
        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }
        break;
      case "Add":
        if (isValidIndex) {
          targets.splice(index, 0, value);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        if (
          !isValidIndex ||
          index - value < 0 ||
          index + value > targets.length
        ) {
          console.log("Strike missed!");
        } else {
          targets.splice(index - value, value * 2 + 1);
        }
        break;
    }

    currentLine = input.shift();
  }

  console.log(targets.join("|"));
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
