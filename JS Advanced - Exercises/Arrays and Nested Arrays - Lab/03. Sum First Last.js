function sumFirstLast(nums) {

  let num1 = Number(nums[0]);
  let num2 = Number(nums.pop());
  let sum = num1 + num2;

  return sum;
}

sumFirstLast(["20", "30", "40"]);
sumFirstLast(["5", "10"]);

