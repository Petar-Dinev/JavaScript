function pascalCaseSplitter(str) {
  let result = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    word += str[i];
    if (str[i + 1] != undefined) {
      if (str[i + 1] == str[i + 1].toUpperCase()) {
        result.push(word);
        word = "";
      }
    } else {
      result.push(word);
    }
  }

  console.log(result.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
