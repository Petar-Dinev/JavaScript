function passwordReset(input) {
  let password = input.shift();
  let commands = {
    TakeOdd(password) {
      password = password
        .split("")
        .filter((x, i) => i % 2 != 0)
        .join("");
      console.log(password);
      return password;
    },
    Cut,
    Substitute,
  };

  while (input[0] != "Done") {
    let line = input.shift();
    let [command, value1, value2] = line.split(" ");
    password = commands[command](password, value1, value2);
  }

  function Cut(password, index, length) {
    password = password.split("");
    password.splice(index, length);
    password = password.join("");
    console.log(password);
    return password;
  }

  function Substitute(password, match, replacer) {
    if (password.includes(match)) {
      password = password.split(match).join(replacer);
      console.log(password);
    } else {
      console.log("Nothing to replace!");
    }
    return password;
  }
  console.log(`Your password is: ${password}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
