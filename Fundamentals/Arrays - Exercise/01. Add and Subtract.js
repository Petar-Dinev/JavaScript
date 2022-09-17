function addAndSubtract(arr) {
  let newArr = [];
  let sumOfArrNums = 0;
  let sumOfNewArrNums = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOfArrNums += arr[i];
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i] + i);
      sumOfNewArrNums += newArr[i];
    } else {
      newArr.push(arr[i] - i);
      sumOfNewArrNums += newArr[i];
    }
  }
  console.log(newArr);
  console.log(sumOfArrNums);
  console.log(sumOfNewArrNums);
}

addAndSubtract([5, 15, 23, 56, 35]);
