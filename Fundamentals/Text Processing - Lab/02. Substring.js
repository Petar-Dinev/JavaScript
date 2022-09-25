function substring(str, startIndex, countOfCh) {
  let endIndex = startIndex + countOfCh;

  let result = str.substring(startIndex, endIndex);
  console.log(result);
}

substring("ASentence", 1, 8);
