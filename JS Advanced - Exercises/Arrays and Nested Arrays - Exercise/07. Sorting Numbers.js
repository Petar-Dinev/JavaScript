function sortingNumber(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  let halfArrLength = Math.floor(nums.length / 2);

  for (let i = 0; i < halfArrLength; i++) {
    result.push(nums[i]);
    result.push(nums[nums.length - 1 - i]);
  }

  if (nums.length % 2 != 0) {
    result.push(nums[halfArrLength]);
  }

  return result;
}

sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 60]);
