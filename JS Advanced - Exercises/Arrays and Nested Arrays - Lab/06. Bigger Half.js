function biggerHalf(nums) {
  nums.sort((a, b) => a - b);
  let numsLength = nums.length;
  let result =
    numsLength % 2 == 0
      ? nums.slice(-numsLength / 2)
      : nums.slice(-numsLength / 2 - 1);
  return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
