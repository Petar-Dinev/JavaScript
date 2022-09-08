function reverseAnArrayOfNumbers(n, nums) {
  let newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push(nums[i]);
  }
  let reversArr = [];
  for (let i = newArr.length; i >= 0; i--) {
    reversArr.push(newArr[i]);
  }
  console.log(reversArr.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
