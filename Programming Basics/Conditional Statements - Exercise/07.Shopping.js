function shopping(input) {
  const singleVideoCardPrice = 250;

  const budget = Number(input[0]);
  const videoCardCount = Number(input[1]);
  const processorsCount = Number(input[2]);
  const ramMemory = Number(input[3]);

  const allVideoCardsCost = videoCardCount * singleVideoCardPrice;
  const processorsCost = allVideoCardsCost * 0.35 * processorsCount;
  const ramMemoryCost = allVideoCardsCost * 0.1 * ramMemory;
  let totalCost = allVideoCardsCost + processorsCost + ramMemoryCost;

  if (videoCardCount > processorsCount) {
    totalCost *= 0.85;
  }
  if (totalCost > budget) {
    let needMoney = (totalCost - budget).toFixed(2);
    console.log(`Not enough money! You need ${needMoney} leva more!`);
  } else {
    let leftMoney = (budget - totalCost).toFixed(2);
    console.log(`You have ${leftMoney} leva left!`);
  }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
