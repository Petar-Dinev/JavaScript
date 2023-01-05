function partyTime(input) {
  let regularList = [];
  let vipList = [];

  let guest = input.shift();

  while (guest !== "PARTY") {
    if (isNaN(Number(guest[0]))) {
      regularList.push(guest);
    } else {
      vipList.push(guest);
    }
    guest = input.shift();
  }

  for (let guest of input) {
    if (isNaN(Number(guest[0]))) {
      let index = regularList.indexOf(guest);
      if (index >= 0) {
        regularList.splice(index, 1);
      }
    } else {
      let index = vipList.indexOf(guest);
      if (index >= 0) {
        vipList.splice(index, 1);
      }
    }
  }

  console.log(regularList.length + vipList.length);
  console.log(vipList.join("\n"));
  console.log(regularList.join("\n"));
}

// partyTime([
//   "7IK9Yo0h",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
//   "tSzE5t0p",
//   "PARTY",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
// ]);
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
