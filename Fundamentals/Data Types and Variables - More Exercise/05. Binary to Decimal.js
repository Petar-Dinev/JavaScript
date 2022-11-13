function binaryToDecimal(numAsString) {
  let sum = 0;
  let length = numAsString.length;
  for (let i = 0; i < numAsString.length; i++) {
    sum += Number(numAsString[i]) * Math.pow(2, length - 1);
    length--;
  }
  console.log(sum);
}

binaryToDecimal("00001001");
