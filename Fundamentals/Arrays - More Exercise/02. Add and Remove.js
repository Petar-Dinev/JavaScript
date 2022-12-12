function addAndRemove(input) {
  let result = [];
  let currentNum = 1;
  for (let i = 0; i < input.length; i++) {
    let command = input[i];
    if (command == "add") {
      result.push(currentNum);
    } else if (command == "remove") {
      result.pop();
    }
    currentNum++;
  }
  if (result.length == 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
