function negativePositiveNumbers(nums) {
  let result = [];

  for (let num of nums) {
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }

  for (let el of result) {
    console.log(el);
  }
}

negativePositiveNumbers([7, -2, 8, 9]);
