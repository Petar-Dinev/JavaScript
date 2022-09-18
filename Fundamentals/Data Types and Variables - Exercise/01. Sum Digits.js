function sumDigits(num) {
  let sum = 0;
  let numAsString = String(num);
  for (let char of numAsString) {
    sum += Number(char);
  }
  console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
