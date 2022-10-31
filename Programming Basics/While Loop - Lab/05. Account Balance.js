function accountBalance(input) {
  let index = 0;
  let balance = 0;
  let command = input[index];
  index++;

  while (command !== "NoMoreMoney") {
    let currentSum = Number(command);

    if (currentSum < 0) {
      console.log("Invalid operation!");
      break;
    } else {
      console.log(`Increase: ${currentSum.toFixed(2)}`);
      balance += currentSum;
    }
    command = input[index];
    index++;
  }
  console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"])