function hardWord(input) {
  let text = input[0];
  let words = input[1];
  let pattern = /_+/g;
  let emptyPlace = text.match(pattern);

  while (text.includes("_")) {
    let currentEmptySlot = emptyPlace.shift();
    let currentWord = words.find((x) => x.length == currentEmptySlot.length);
    text = text.replace(currentEmptySlot, currentWord);
  }

  console.log(text);
}

hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
