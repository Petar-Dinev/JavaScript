function minNumber(input) {
  let index = 0;
  let command = input[index];
  index++;
  let minNum = Number.MAX_SAFE_INTEGER;

  while (command !== "Stop") {
    let currNum = Number(command);
    if (currNum < minNum) {
      minNum = currNum;
    }
    command = input[index];
    index++;
  }
  console.log(minNum);
}
