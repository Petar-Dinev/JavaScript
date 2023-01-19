function wordsUppercase(text) {
  let pattern = /\w+/g;
  let result = [];
  let match = pattern.exec(text);

  while (match != null) {
    result.push(match[0]);
    match = pattern.exec(text);
  }
  console.log(result.map(x=>x.toUpperCase()).join(", "));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
