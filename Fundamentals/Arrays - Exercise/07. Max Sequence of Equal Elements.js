function maxSequenceOfEqualElements(nums) {
  let longestSequence = [];
  for (let i = 0; i < nums.length; i++) {
    let curentSequence = [];
    curentSequence.push(nums[i]);
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] == nums[k]) {
        curentSequence.push(nums[i]);
      } else {
        break;
      }
    }
    if (curentSequence.length > longestSequence.length) {
      longestSequence = curentSequence;
    }
  }
  console.log(longestSequence.join(" "));
}

// maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
