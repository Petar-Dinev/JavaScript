function smallestTwoNumbers(nums) {
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < 2; i++) {
    result.push(nums[i]);
  }

  console.log(result.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
