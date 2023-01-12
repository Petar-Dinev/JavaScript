function ladybugs(input) {
  let bugFieldSize = input.shift();
  let indexsWithBugs = input.shift().split(" ");
  let bugField = new Array(bugFieldSize);
  bugField.fill(0);

  for (let i = 0; i < indexsWithBugs.length; i++) {
    if (indexsWithBugs[i] < bugField.length) {
      bugField[indexsWithBugs[i]] = 1;
    }
  }
  for (let i = 0; i < input.length; i++) {
    let [bugIndex, direction, length] = input[i].split(" ");
    bugIndex = Number(bugIndex);
    length = Number(length);
    if (bugField[bugIndex] == 1) {
      bugField[bugIndex]--;

      switch (direction) {
        case "right":
          while (true) {
            if (bugIndex + length >= 0 && bugIndex + length < bugField.length) {
              if (bugField[bugIndex + length] == 0) {
                bugField[bugIndex + length] = 1;
                break;
              } else {
                bugIndex += length;
              }
            } else {
              break;
            }
          }
          break;
        case "left":
          while (true) {
            if (bugIndex - length >= 0 && bugIndex - length < bugField.length) {
              if (bugField[bugIndex - length] == 0) {
                bugField[bugIndex - length] = 1;
                break;
              } else {
                bugIndex -= length;
              }
            } else {
              break;
            }
          }
          break;
      }
    }
  }
  console.log(bugField.join(" "));
}

ladybugs([3, "0 1 4", "0 right 1", "2 right 1", "4 left 2"]);
// ladybugs([5, "3", "3 left 2", "1 left -2"]);
// ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
