function sumOfOddNumbers(n) {
  let sum = 0;
  let curentOdd = 1;
  for (let i = 0; i < n; i++) {
    console.log(curentOdd);
    sum += curentOdd;
    curentOdd += 2;
  }

  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
