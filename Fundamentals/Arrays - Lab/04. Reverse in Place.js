function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let k = arr.length - 1 - i;
    let tempEl = arr[i];
    arr[i] = arr[k];
    arr[k] = tempEl;
  }
  console.log(arr.join(" "));
}

reverseInPlace(["1", "2", "3", "4", "5", "6"]);
reverseInPlace(["3", "5", "7", "9"]);
reverseInPlace(["2", "4", "6", "8", "10"]);
