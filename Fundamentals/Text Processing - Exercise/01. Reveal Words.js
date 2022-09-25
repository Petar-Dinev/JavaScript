function revealWords(words, string) {
  let wordsArr = words.split(", ");
  let stringArr = string.split(" ");

  for (let word of wordsArr) {
    let indexOnWordForReplace = stringArr.indexOf("*".repeat(word.length));
    stringArr[indexOnWordForReplace] = word;
  }
  console.log(stringArr.join(" "));
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
