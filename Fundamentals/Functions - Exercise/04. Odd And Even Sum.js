function oddAndEvenSum(num) {
  let numAsString = String(num);
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < numAsString.length; i++) {
    if (numAsString[i] % 2 == 0) {
      evenSum += Number(numAsString[i]);
    } else {
      oddSum += Number(numAsString[i]);
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(12312515672);
