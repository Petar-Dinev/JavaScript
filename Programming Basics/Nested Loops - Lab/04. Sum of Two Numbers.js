function sumOfTwoNumbers(input) {
  let combination = 0;
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let magicNum = Number(input[2]);
  let isFound = false;
  for (let i = startNum; i <= endNum; i++) {
    for (let k = startNum; k <= endNum; k++) {
      let result = i + k;
      combination++;
      if (result == magicNum) {
        console.log(`Combination N:${combination} (${i} + ${k} = ${magicNum})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${combination} combinations - neither equals ${magicNum}`);
  }
}

sumOfTwoNumbers(["1", "10", "5"]);
