function modernTimes(string) {
  let result = [];
  let stringAsArr = string.split(" ");

  for (let el of stringAsArr) {
    if (el.startsWith("#") && el.length > 1) {
      result.push(el);
    }
  }
  result = result.map((x) => x.slice(1, x.length));
  let newResult = [];
  for (let el of result) {
    let elIncludeOnlyLetters = true;
    for (let i = 0; i < el.length; i++) {
      currentEl = el.toLowerCase();
      if (!(currentEl[i].charCodeAt() > 96 && currentEl[i].charCodeAt() < 123)) {
        elIncludeOnlyLetters = false;
      }
    }
    if (elIncludeOnlyLetters) {
      newResult.push(el);
    }
  }
  console.log(newResult.join("\n"));
}

modernTimes(
  "The symbol # is known #variously in English-speaking #Regions as the #number sign"
);
