function evenPositionElements(nums) {
  let myArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      myArr.push(nums[i]);
    }
  }

  console.log(myArr.join(" "));
}

evenPositionElements(["20", "30", "40", "50", "60"]);
