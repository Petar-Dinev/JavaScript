function palindromeIntegers(nums) {
  for (let num of nums) {
    let numAsString = num.toString();
    let numAsStringReversed = "";
    for (let i = numAsString.length - 1; i >= 0; i--) {
      numAsStringReversed += numAsString[i];
    }
    if (numAsString == numAsStringReversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
