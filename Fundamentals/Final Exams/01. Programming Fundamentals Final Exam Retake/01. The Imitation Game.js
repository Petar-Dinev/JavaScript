function solve(input) {
  let message = input.shift();
  const commands = {
    Move: move,
    Insert: insert,
    ChangeAll: changeAll,
  };

  while (input[0] != "Decode") {
    let [command, arg1, arg2] = input.shift().split("|");
    let action = commands[command];
    message = action(message, arg1, arg2);
  }
  console.log(`The decrypted message is: ${message}`);

  function move(message, numChars) {
    let firstPart = message.slice(0, numChars);
    let secondPart = message.slice(numChars);
    return secondPart + firstPart;
  }
  function insert(message, index, value) {
    let firstPart = message.slice(0, index);
    let secondPart = message.slice(index);
    return firstPart + value + secondPart;
  }
  function changeAll(message, match, replace) {
    return message.split(match).join(replace);
  }
}

solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
