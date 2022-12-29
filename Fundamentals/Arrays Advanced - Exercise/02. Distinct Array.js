function distinctArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    for (let k = i + 1; k < nums.length; k++) {
      if (currentNum == nums[k]) {
        nums.splice(k, 1);
        k--;
      }
    }
  }
  console.log(nums.join(" "));
}

distinctArray([1, 2, 2, 2, 3, 4]);
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
// distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
