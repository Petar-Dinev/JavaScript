function sumFirstAndLast(array) {
  let firstNum = Number(array[0]);
  let lastNum = Number(array.pop());

  return firstNum + lastNum;
}
