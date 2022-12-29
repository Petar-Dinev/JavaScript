function houseParty(input) {
  let res = [];

  for (let i = 0; i < input.length; i++) {
    let name = input[i].split(" ")[0];
    if (input[i].includes("not")) {
      if (res.includes(name)) {
        let index = res.indexOf(name);
        res.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (res.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        res.push(name);
      }
    }
  }

  console.log(res.join("\n"));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
