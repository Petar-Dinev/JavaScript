function cardGame(input) {
  let result = {};
  let facePower = {
    1: 10,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let suitPower = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  for (let line of input) {
    let [name, cards] = line.split(":");
    cards = cards.split(", ");
    if (!result.hasOwnProperty(name)) {
      result[name] = new Set();
      for (let card of cards) {
        result[name].add(card.trim());
      }
    } else {
      for (let card of cards) {
        result[name].add(card.trim());
      }
    }
  }

  for (let key in result) {
    let value = 0;
    for (let card of Array.from(result[key])) {
      let suit = card[card.length - 1];
      let face = card[0];
      value += suitPower[suit] * facePower[face];
    }
    console.log(`${key}: ${value}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
