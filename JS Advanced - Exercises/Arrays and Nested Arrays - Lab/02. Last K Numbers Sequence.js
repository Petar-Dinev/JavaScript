function lastKNumbersSequence(n, k) {
  let myArr = [1];

  while (myArr.length < n) {
    let sum = 0;
    let nums = myArr.slice(-k);
    for (let num of nums) {
      sum += num;
    }
    myArr.push(sum);
  }
  return myArr;
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
