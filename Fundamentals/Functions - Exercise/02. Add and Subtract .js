function addAndSubtract(num1, num2, num3) {
  function add(num1, num2) {
    return num1 + num2;
  }
  let sum = add(num1, num2);

  function subtract(sum, num3) {
    return sum - num3;
  }
  let result = subtract(sum, num3);

  console.log(result);
}

addAndSubtract(5, 5, 5);
