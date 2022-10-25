function sequence2kPlus1(input) {
  let index = 0;
  const endNum = Number(input[index]);
  index++;
  let currentNum = 1;

  while (currentNum <= endNum) {
    console.log(currentNum);
    let nextNum = currentNum * 2 + 1;
    currentNum = nextNum;
  }
}
