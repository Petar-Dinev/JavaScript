function airPollution(sofiaMap, commands) {
  let matrix = [];
  for (let line of sofiaMap) {
    matrix.push(line.split(" ").map(Number));
  }

  for (let line of commands) {
    let [command, value] = line.split(" ");
    value = Number(value);

    switch (command) {
      case "breeze":
        matrix[value] = matrix[value].map((x) => {
          x -= 15;
          if (x < 0) {
            x = 0;
          }
          return x;
        });
        break;
      case "gale":
        for (let i = 0; i < matrix.length; i++) {
          matrix[i][value] -= 20;
          if (matrix[i][value] < 0) {
            matrix[i][value] = 0;
          }
        }
        break;
      case "smog":
        for (let k = 0; k < matrix.length; k++) {
          matrix[k] = matrix[k].map((x) => x + value);
        }
        break;
    }
  }

  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[i][k] >= 50) {
        result.push(`[${i}-${k}]`);
      }
    }
  }

  if (result.length > 0) {
    console.log(`Polluted areas: ${result.join(", ")}`);
  } else {
    console.log("No polluted areas");
  }
}

airPollution(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);

airPollution(
  [
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
  ],
  ["smog 11", "gale 3", "breeze 1", "smog 2"]
);
