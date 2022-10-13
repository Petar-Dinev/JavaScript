function operationsBetweenNumbers(input) {
  const firstNum = Number(input[0]);
  const secondNum = Number(input[1]);
  const operator = input[2];
  let result = 0;

  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      if (result % 2 == 0) {
        console.log(`${firstNum} + ${secondNum} = ${result} - even`);
      } else {
        console.log(`${firstNum} + ${secondNum} = ${result} - odd`);
      }
      break;
    case "-":
      result = firstNum - secondNum;
      if (result % 2 == 0) {
        console.log(`${firstNum} - ${secondNum} = ${result} - even`);
      } else {
        console.log(`${firstNum} - ${secondNum} = ${result} - odd`);
      }
      break;
    case "*":
      result = firstNum * secondNum;
      if (result % 2 == 0) {
        console.log(`${firstNum} * ${secondNum} = ${result} - even`);
      } else {
        console.log(`${firstNum} * ${secondNum} = ${result} - odd`);
      }
      break;
    case "/":
      result = (firstNum / secondNum).toFixed(2);
      if (secondNum == 0) {
        console.log(`Cannot divide ${firstNum} by zero`);
      } else {
        console.log(`${firstNum} / ${secondNum} = ${result}`);
      }
      break;
    case "%":
      result = firstNum % secondNum;
      if (secondNum == 0) {
        console.log(`Cannot divide ${firstNum} by zero`);
      } else {
        console.log(`${firstNum} % ${secondNum} = ${result}`);
      }
      break;
  }
}
