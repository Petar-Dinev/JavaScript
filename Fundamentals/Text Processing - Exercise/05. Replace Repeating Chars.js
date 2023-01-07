function replaceRepeatingChars(str) {
  let result = [];
  let currentChar = str[0];
  result.push(str[0]);
  for (let i = 1; i < str.length; i++) {
    if (currentChar != str[i]) {
      result.push(str[i]);
    }
    currentChar = str[i];
  }

  console.log(result.join(""));
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
replaceRepeatingChars("qqqwerqwecccwd");
