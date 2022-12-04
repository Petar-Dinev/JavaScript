function logistics(input) {
  let index = 0;
  let numberOfLoads = Number(input[index]);
  index++;
  let currentLoad = Number(input[index]);
  index++;
  let vanLoadss = 0;
  let truckLoads = 0;
  let trainLoads = 0;
  let allLoadsInTons = 0;

  for (let i = 0; i < numberOfLoads; i++) {
    allLoadsInTons += currentLoad;
    if (currentLoad < 4) {
      vanLoadss += currentLoad;
    } else if (currentLoad < 12) {
      truckLoads += currentLoad;
    } else {
      trainLoads += currentLoad;
    }
    currentLoad = Number(input[index]);
    index++;
  }
  let averagePriceOfTon =
    (vanLoadss * 200 + truckLoads * 175 + trainLoads * 120) / allLoadsInTons;
  console.log(averagePriceOfTon.toFixed(2));
  console.log(`${((vanLoadss / allLoadsInTons) * 100).toFixed(2)}%`);
  console.log(`${((truckLoads / allLoadsInTons) * 100).toFixed(2)}%`);
  console.log(`${((trainLoads / allLoadsInTons) * 100).toFixed(2)}%`);
}

logistics(["5", "2", "10", "20", "1", "7"]);
// 5
// 2
// 10
// 20
// 1
// 7

