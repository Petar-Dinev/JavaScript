function janNotation(input) {
  let result = [];
  let isValid = true;

  for (let el of input) {
    if (typeof el == "number") {
      result.push(el);
    } else {
      if (result.length < 2) {
        console.log("Error: not enough operands!");
        isValid = false;
        break;
      }
      let nums = result.slice(-2);
      let res;
      switch (el) {
        case "+":
          res = nums[0] + nums[1];
          break;
        case "-":
          res = nums[0] - nums[1];
          break;
        case "*":
          res = nums[0] * nums[1];
          break;
        case "/":
          res = nums[0] / nums[1];
          break;
      }
      let index = result.indexOf(nums[0]);
      result.splice(index, 2, res);
    }
  }

  if (result.length > 1) {
    console.log(`Error: too many operands!`);
  } else {
    if (isValid) {
      console.log(result[0]);
    }
  }
}

// janNotation([3, 4, "+"]);
// janNotation([7, 33, 8, "-"]);
janNotation([15, "/"]);
// janNotation([5, 3, 4, "*", "-"]);
// janNotation([31, 2, "+", 11, "/"]);
// janNotation([-1, 1, "+", 101, "*", 18, "+", 3, "/"]);
