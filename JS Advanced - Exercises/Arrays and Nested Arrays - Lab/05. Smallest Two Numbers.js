function smallestTwoNumbers(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums[0], nums[1]);
}

smallestTwoNumbers([30, 15, 50, 5]);
