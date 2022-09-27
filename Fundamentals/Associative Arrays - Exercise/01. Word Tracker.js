function wordTracker(words) {
  let wordsToFind = words.shift().split(" ");
  let result = {};
  for (let word of wordsToFind) {
    result[word] = 0;
  }

  for (let word of words) {
    if (result[word] !== undefined) {
      result[word]++;
    }
  }

  let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

  for (let word of sorted) {
    console.log(word[0], "-", word[1]);
  }
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
