function vacation(input) {
  let index = 0;
  let vacationPrice = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;
  let action = input[index];
  index++;
  let spendCount = 0;
  let daysCount = 0;

  while (money < vacationPrice) {
    daysCount++;
    let tempMoney = Number(input[index]);
    index++;
    switch (action) {
      case "spend":
        money -= tempMoney;
        spendCount++;
        if (money < 0) {
          money = 0;
        }
        break;
      case "save":
        money += tempMoney;
        spendCount = 0;
        break;
    }
    if (spendCount >= 5) {
      console.log("You can't save the money.");
      console.log(daysCount);
      break;
    }
    action = input[index];
    index++;
  }
  if (spendCount < 5) {
    console.log(`You saved the money for ${daysCount} days.`);
  }
}
