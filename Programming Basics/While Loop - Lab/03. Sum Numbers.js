function sumNumbers(input) {
  let index = 0;
  const endNum = Number(input[index]);
  index++;
  let sum = 0;

  while (sum < endNum) {
    let currentNum = Number(input[index]);
    index++;
    sum += currentNum;
  }
  console.log(sum);
}
