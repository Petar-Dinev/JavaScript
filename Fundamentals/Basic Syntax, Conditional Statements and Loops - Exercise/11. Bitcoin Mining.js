function bitcoinMining(arr) {
  let bitcoinPrice = 11949.16;
  let oneGramGoldPrice = 67.51;
  let totalMoney = 0;
  let dayOfFirstBitcoinBuyed = 0;
  let bitcoinsBuyed = 0;
  let countOfBuys = 0;

  for (let i = 1; i <= arr.length; i++) {
    let currentGoldMined = arr[i - 1];
    if (i % 3 == 0) {
      currentGoldMined *= 0.7;
    }
    totalMoney += currentGoldMined * oneGramGoldPrice;
    if (totalMoney > bitcoinPrice) {
      countOfBuys++;
      let currentBitcoinBuyed = Math.floor(totalMoney / bitcoinPrice);
      bitcoinsBuyed += currentBitcoinBuyed;
      totalMoney -= currentBitcoinBuyed * bitcoinPrice;
      if (countOfBuys == 1) {
        dayOfFirstBitcoinBuyed = i;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoinsBuyed}`);
  if (bitcoinsBuyed != 0) {
    console.log(
      `Day of the first purchased bitcoin: ${dayOfFirstBitcoinBuyed}`
    );
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([3124.15, 504.212, 2511.124]);
