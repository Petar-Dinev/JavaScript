function signCheck(numOne, numTwo, numThree) {
  let numsUnderZero = 0;

  if (numOne < 0 && numTwo < 0 && numThree < 0) {
    numsUnderZero = 3;
  } else if (
    (numOne < 0 && numTwo < 0 && numThree > 0) ||
    (numOne < 0 && numTwo > 0 && numThree < 0) ||
    (numOne > 0 && numTwo < 0 && numThree < 0)
  ) {
    numsUnderZero = 2;
  } else if (
    (numOne < 0 && numTwo > 0 && numThree > 0) ||
    (numOne > 0 && numTwo < 0 && numThree > 0) ||
    (numOne > 0 && numTwo > 0 && numThree < 0)
  ) {
    numsUnderZero = 1;
  }
  if (numsUnderZero == 1 || numsUnderZero == 3) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}

signCheck(5, -2, 16)
