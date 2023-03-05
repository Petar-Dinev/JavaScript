function solve(input) {
  let result = [];
  let isError = false;
  for (let el of input) {
    if (typeof el == "number") {
      result.push(el);
    } else {
      if (result.length < 2) {
        console.log("Error: not enough operands!");
        isError = true;
        break;
      } else {
        let [num1, num2] = result.splice(result.length - 2, 2);
        if (el == "+") {
          result.push(num1 + num2);
        } else if (el == "-") {
          result.push(num1 - num2);
        } else if (el == "*") {
          result.push(num1 * num2);
        } else if (el == "/") {
          result.push(num1 / num2);
        }
      }
    }
  }
  if (result.length > 1 && !isError) {
    console.log("Error: too many operands!");
  } else if (result.length == 1 && !isError) {
    console.log(result[0]);
  }
}

solve([3, 4, "+"]);
solve([5, 3, 4, "*", "-"]);
solve([7, 33, 8, "-"]);
solve([15, "/"]);
