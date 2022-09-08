function sumFirstAndLastArrayElements(arr) {
  let firstEl = Number(arr[0]);
  let lastEl = Number(arr[arr.length - 1]);
  let result = firstEl + lastEl;

  console.log(result);
}

sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);
