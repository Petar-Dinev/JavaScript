function sorting(nums) {
  nums.sort((a, b) => b - a);
  let length = nums.length;
  let res = [];
  for (let i = 0; i < length; i++) {
    if (i % 2 == 0) {
      res.push(nums.shift());
    } else {
      res.push(nums.pop());
    }
  }
  console.log(res.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
