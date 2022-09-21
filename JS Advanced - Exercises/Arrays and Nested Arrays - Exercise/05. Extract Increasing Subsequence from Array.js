function extractIncreasingSubsequenceFromArray(numbers) {
  let result = [];
  let biggestNum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    if (currentNum >= biggestNum) {
      result.push(currentNum);
      biggestNum = currentNum;
    }
  }

  return result;
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);
