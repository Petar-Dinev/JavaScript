function stringSubstring(word, text) {
  let words = text.split(" ");
  let isFound = false;
  for (let el of words) {
    if (word == el.toLowerCase()) {
      console.log(word);
      isFound = true;
      break;
    }
  }

  if (!isFound) {
    console.log(`${word} not found!`);
  }
}

stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
