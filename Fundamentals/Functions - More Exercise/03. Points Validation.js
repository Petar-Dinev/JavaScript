function pointsValidator(input) {
  function validator(nums) {
    let x1 = nums[0];
    let y1 = nums[1];
    let x2 = nums[2];
    let y2 = nums[3];

    let result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (Number.isInteger(result)) {
      return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    } else {
      return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
  }

  let x1 = input[0];
  let y1 = input[1];
  let x2 = input[2];
  let y2 = input[3];

  console.log(validator([x1, y1, 0, 0]));
  console.log(validator([x2, y2, 0, 0]));
  console.log(validator(input));
}

pointsValidator([3, 0, 0, 4]);
pointsValidator([2, 1, 1, 1]);
