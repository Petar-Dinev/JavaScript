function arrayModifier(input) {
  let arr = input.shift().split(" ").map(Number);

  let currentLine = input.shift();

  while (currentLine !== "end") {
    let [command, index1, index2] = currentLine.split(" ");
    index1 = Number(index1);
    index2 = Number(index2);

    switch (command) {
      case "swap":
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        break;
      case "multiply":
        arr[index1] *= arr[index2];
        break;
      case "decrease":
        arr = arr.map((x) => (x -= 1));
        break;
    }

    currentLine = input.shift();
  }

  console.log(arr.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
