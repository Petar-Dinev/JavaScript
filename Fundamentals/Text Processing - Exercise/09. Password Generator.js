function solve([str1, str2, word]) {
  let bigStr = str1 + str2;
  let wordLength = word.length;
  let wordIndex = 0;

  let res = "";

  for (let char of bigStr) {
    if (
      char == "a" ||
      char == "e" ||
      char == "o" ||
      char == "i" ||
      char == "u"
    ) {
      res += word[wordIndex].toUpperCase();
      wordIndex++;
      if (wordIndex == wordLength) {
        wordIndex = 0;
      }
    } else {
      res += char;
    }
  }

  let output = "";

  for (let i = res.length - 1; i >= 0; i--) {
    output += res[i];
  }

  console.log(`Your generated password is ${output}`)
}

solve(["ilovepizza", "ihatevegetables", "orange"]);
solve(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
