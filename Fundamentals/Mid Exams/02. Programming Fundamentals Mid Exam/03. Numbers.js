function numbers(input) {
  let nums = input.split(" ").map(Number);
  let averageNum = 0;
  for (let i = 0; i < nums.length; i++) {
    averageNum += nums[i];
  }
  averageNum /= nums.length;
  nums.sort((a, b) => b - a);
  let biggersOfAvgNum = nums.filter((x) => x > averageNum);
  let result = biggersOfAvgNum.slice(0, 5);
  if (result.length == 0) {
    console.log("No");
  } else {
    console.log(result.join(" "));
  }
}

numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");
