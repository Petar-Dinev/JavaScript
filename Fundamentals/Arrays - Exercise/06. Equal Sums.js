function equalSums(arr) {
  let isEqual = false;
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let k = 0; k < i; k++) {
      leftSum += arr[k];
    }
    for (let l = i + 1; l < arr.length; l++) {
      rightSum += arr[l];
    }
    if (leftSum == rightSum) {
      console.log(i);
      isEqual = true;
      break;
    }
  }
  if (arr.length < 2 && !isEqual) {
    console.log("0");
  } else if (!isEqual) {
    console.log("no");
  }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
