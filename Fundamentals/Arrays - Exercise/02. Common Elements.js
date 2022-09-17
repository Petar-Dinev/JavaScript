function commonElements(arr, arr2) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr[i] === arr2[k]) {
        console.log(arr[i]);
      }
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
