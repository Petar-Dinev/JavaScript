function aggregateElements(nums) {
  let sum = 0;
  let sumOfInversValues = 0;
  let concat = "";

  for (let num of nums) {
    sum += num;
    sumOfInversValues += 1 / num;
    concat += num;
  }

  console.log(sum);
  console.log(sumOfInversValues);
  console.log(concat);
}

aggregateElements([1, 2, 3]);
