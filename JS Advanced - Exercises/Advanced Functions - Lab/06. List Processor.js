function listProcessor(input) {
  const result = [];
  const commands = {
    add: function (arg1) {
      result.push(arg1);
    },
    remove: function (arg) {
      while (result.includes(arg)) {
        let index = result.indexOf(arg);
        result.splice(index, 1);
      }
    },
    print: function () {
      console.log(result.join(","));
    },
  };

  for (let line of input) {
    let [command, str] = line.split(" ");
    commands[command](str);
  }
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);
