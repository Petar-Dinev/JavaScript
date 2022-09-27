function piccolo(input) {
  let result = {};

  for (let line of input) {
    let [command, car] = line.split(", ")
    if (command == "IN") {
      result[car] = 1;
    } else {
      delete result[car];
    }
  }

  let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b))
  for (let key of sorted) {
    console.log(key);
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
