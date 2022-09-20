function addAndRemoveElements(commands) {
  let result = [];
  let currentNum = 1;

  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "add":
        result.push(currentNum);
        break;
      case "remove":
        result.pop();
        break;
    }
    currentNum++;
  }
  if (result.length > 0) {
    console.log(result.join("\n"));
  } else {
    console.log("Empty");
  }
}

addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
