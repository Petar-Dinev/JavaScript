function greatestCommonDivisor(num1, num2) {
  let greatestDivisor = 0;
  let startIndex = Math.min(num1, num2);
  for (let i = startIndex; i >= 0; i--) {
    if (num1 % i == 0 && num2 % i == 0) {
      greatestDivisor = i;
      break;
    }
  }
  console.log(greatestDivisor);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
