function primeNumberChecker(num) {
  if (num % num === 0 && num % 1 === 0 && num % 2 !== 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

primeNumberChecker(81);
