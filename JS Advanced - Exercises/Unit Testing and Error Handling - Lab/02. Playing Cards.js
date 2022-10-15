function playingCards(face, suit) {
  let faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let suits = {
    S: "\u2660 ",
    H: "\u2665 ",
    D: "\u2666",
    C: "\u2663",
  };

  if (faces.includes(face) == false) {
    throw new Error("Invalid face: " + face);
  }

  if (suits[suit] == undefined) {
    throw new Error("Invalid suit: " + suit);
  }

  let result = {
    face,
    suit: suits[suit],
    toString() {
      return this.face + result.suit;
    },
  };

  return result;
}

console.log(playingCards("A", "S").toString());
playingCards("10", "H").toString();
playingCards("1", "C").toString();
