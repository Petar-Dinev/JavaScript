function arrayManipulator(nums, commands) {
  for (let i = 0; i < commands.length; i++) {
    let currentCommand = commands[i].split(" ")[0];
    switch (currentCommand) {
      case "add":
        let index = Number(commands[i].split(" ")[1]);
        let num = Number(commands[i].split(" ")[2]);
        nums.splice(index, 0, num);
        break;
      case "addMany":
        let [command, index2, ...numbers] = commands[i].split(" ");
        numbers = numbers.map(Number);
        nums.splice(index2, 0, ...numbers);
        break;
      case "contains":
        let searchNum = Number(commands[i].split(" ")[1]);
        console.log(nums.indexOf(searchNum));
        break;
      case "remove":
        let removeIndex = Number(commands[i].split(" ")[1]);
        nums.splice(removeIndex, 1);
        break;
      case "shift":
        let shifts = Number(commands[i].split(" ")[1]);
        for (let k = 0; k < shifts; k++) {
          nums.push(nums.shift());
        }
        break;
      case "sumPairs":
        let res = [];
        for (let l = 0; l < nums.length; l += 2) {
          if (nums.length % 2 == 0) {
            res.push(nums[l] + nums[l + 1]);
          } else {
            if (l == nums.length - 1) {
              res.push(nums[l]);
            } else {
              res.push(nums[l] + nums[l + 1]);
            }
          }
        }
        nums = res;

        break;
      case "print":
        console.log(`[ ${nums.join(", ")} ]`);
        break;
    }
  }
}

// arrayManipulator(
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "contains 3", "print"]
// );
// arrayManipulator(
//   [1, 2, 3, 4, 5],
//   ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
// );

// arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
arrayManipulator(
  [1, 2, 1, 2, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
