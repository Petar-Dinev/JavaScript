function processOddPositions(nums) {
  let result = nums
    .filter((x, i) => i % 2 != 0)
    .map((x) => x * 2)
    .reverse();
  console.log(result.join(" "));
}

processOddPositions([10, 15, 20, 25]);
