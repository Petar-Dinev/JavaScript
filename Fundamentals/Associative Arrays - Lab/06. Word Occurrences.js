function wordOccurrences(arr) {
  let result = new Map();
  let count = 1;
  for (let word of arr) {
    if (!result.has(word)) {
      result.set(word, count);
    } else {
      let currentCount = result.get(word);
      result.set(word, currentCount + 1);
    }
  }
  let sorted = Array.from(result.entries()).sort((a, b) => b[1] - a[1]);
  for (let arr of sorted) {
    console.log(arr[0], "->", arr[1], "times");
  }
}

// wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
console.log("---------------");
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
