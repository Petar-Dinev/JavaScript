function calculator() {
  let input1;
  let input2;
  let result;

  return {
    init: (selector1, selector2, resultSelector) => {
      input1 = document.querySelector(selector1);
      input2 = document.querySelector(selector2);
      result = document.querySelector(resultSelector);
    },
    add() {
      return (result.value = Number(input1.value) + Number(input2.value));
    },
    subtract: () => (result.value = input1.value - input2.value),
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
