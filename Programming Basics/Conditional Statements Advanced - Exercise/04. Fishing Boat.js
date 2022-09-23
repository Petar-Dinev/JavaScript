function fishingBoat(input) {
  const springBoatPrice = 3000;
  const summerAndAutumnBoatPrice = 4200;
  const winterBoatPrice = 2600;
  const budget = Number(input[0]);
  const season = input[1];
  const fisherManCount = Number(input[2]);

  let totalCost = 0;

  switch (season) {
    case "Spring":
      totalCost = springBoatPrice;
      break;
    case "Summer":
    case "Autumn":
      totalCost = summerAndAutumnBoatPrice;
      break;
    case "Winter":
      totalCost = winterBoatPrice;
      break;
  }
  if (fisherManCount <= 6) {
    totalCost *= 0.9;
  } else if (fisherManCount >= 7 && fisherManCount <= 11) {
    totalCost *= 0.85;
  } else {
    totalCost *= 0.75;
  }
  if (season !== "Autumn" && fisherManCount % 2 == 0) {
    totalCost *= 0.95;
  }
  const diff = Math.abs(budget - totalCost).toFixed(2);
  if (budget < totalCost) {
    console.log(`Not enough money! You need ${diff} leva.`);
  } else {
    console.log(`Yes! You have ${diff} leva left.`);
  }
}

fishingBoat(["3000", "Summer", "11"]);
