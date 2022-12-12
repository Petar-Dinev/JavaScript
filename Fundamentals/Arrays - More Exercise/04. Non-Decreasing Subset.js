function nonDecreasingSubset(arr) {
  let res = [];
  let currentBiggestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= currentBiggestNum) {
      currentBiggestNum = arr[i];
      res.push(arr[i]);
    }
  }
  console.log(res.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
