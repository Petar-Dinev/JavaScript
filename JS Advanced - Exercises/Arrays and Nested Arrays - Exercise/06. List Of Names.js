function listOfNames(arr) {
  arr.sort((a, b) => a.localeCompare(b));
  for (let i = 1; i <= arr.length; i++) {
    console.log(`${i}.${arr[i - 1]}`);
  }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
