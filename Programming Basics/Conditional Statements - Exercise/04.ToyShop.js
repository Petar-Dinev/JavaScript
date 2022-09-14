function toyShop(input) {
  const puzzlePrice = 2.6;
  const talkingDollPrice = 3.0;
  const teddyBearPrice = 4.1;
  const minnionPrice = 8.2;
  const truckPrice = 2.0;

  const vacantionPrice = Number(input[0]);
  const puzzlesCount = Number(input[1]);
  const talkingDollsCount = Number(input[2]);
  const teddyBearsCount = Number(input[3]);
  const minnionsCount = Number(input[4]);
  const trucksCount = Number(input[5]);

  const totalCounts =
    puzzlesCount +
    talkingDollsCount +
    teddyBearsCount +
    minnionsCount +
    trucksCount;
  let totalPrice =
    puzzlePrice * puzzlesCount +
    talkingDollPrice * talkingDollsCount +
    teddyBearPrice * teddyBearsCount +
    minnionPrice * minnionsCount +
    truckPrice * trucksCount;

  if (totalCounts >= 50) {
    totalPrice *= 0.75;
  }

  totalPrice *= 0.9;

  const difference = Math.abs(totalPrice - vacantionPrice);
  if (totalPrice >= vacantionPrice) {
    console.log(`Yes! ${difference.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
  }
}

// toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
