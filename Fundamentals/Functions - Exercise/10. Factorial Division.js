function factorialDivision(num1, num2) {
  let fact1 = 1;
  let fact2 = 1;
  for (let i = 1; i <= num1; i++) {
    fact1 *= i;
  }
  for (let i = 1; i <= num2; i++) {
    fact2 *= i;
  }
  let result = (fact1 / fact2).toFixed(2);
  console.log(result);
}

factorialDivision(5, 2);
