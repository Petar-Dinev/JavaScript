function maxNumber(input) {
  let index = 0;
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let command = input[index];
  index++;

  while (command !== "Stop") {
    currNum = Number(command);
    if (currNum > maxNumber) {
      maxNumber = currNum;
    }
    command = input[index];
    index++;
  }
  console.log(maxNumber);
}
