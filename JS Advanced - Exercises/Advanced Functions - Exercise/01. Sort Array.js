function sortArray(arr, str) {
  if (str == "asc") {
    return arr.sort((a, b) => a - b);
  } else {
    return arr.sort((a, b) => b - a);
  }
}

console.log(sortArray([1, 5, 11, 2, 32], "sdasd"));
