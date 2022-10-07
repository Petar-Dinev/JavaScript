function cleverLily(input) {
  const age = Number(input[0]);
  const washingMachinePrice = Number(input[1]);
  const toyPrice = Number(input[2]);
  let toyCount = 0;
  let lilyMoney = 0;
  let tempMoney = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      lilyMoney += tempMoney;
      tempMoney += 10;
      lilyMoney -= 1;
    } else {
      toyCount++;
    }
  }

  lilyMoney += toyCount * toyPrice;
  let diff = Math.abs(lilyMoney - washingMachinePrice).toFixed(2);
  if (lilyMoney >= washingMachinePrice) {
    console.log(`Yes! ${diff}`);
  } else {
    console.log(`No! ${diff}`);
  }
}
