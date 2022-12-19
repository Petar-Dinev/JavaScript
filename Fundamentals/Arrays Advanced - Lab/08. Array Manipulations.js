function arrayManipulations(input) {
  let nums = input.shift().split(" ").map(Number);

  for (let line of input) {
    let [command, num1, num2] = line.split(" ");
    num1 = Number(num1);
    num2 = Number(num2);

    switch (command) {
      case "Add":
        nums.push(num1);
        break;
      case "Remove":
        nums = nums.filter((x) => x !== num1);
        break;
      case "RemoveAt":
        nums.splice(num1, 1);
        break;
      case "Insert":
        nums.splice(num2, 0, num1);
        break;
    }
  }

  console.log(nums.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
