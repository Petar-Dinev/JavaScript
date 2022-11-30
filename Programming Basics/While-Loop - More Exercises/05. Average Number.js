function averageNumber(nums) {
  let numberOfNums = nums.shift()
  let sum = 0;
  for (let i = 0; i < numberOfNums; i++) {
    sum += Number(nums[i]);
  }

  console.log((sum / numberOfNums).toFixed(2));
}

averageNumber(4, 3, 2, 4, 2);
