function equalArrays(arr, arr2) {
  let sum = 0;
  let isIdentical = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr2[i]) {
      sum += Number(arr[i]);
    } else {
      isIdentical = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    }
  }
  if (isIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);
