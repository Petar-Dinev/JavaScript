function orders(product, quantity) {
  let coffeePrice = 1.5;
  let waterPrice = 1.0;
  let cokePrice = 1.4;
  let snacksPrice = 2.0;
  let totalCost = 0;

  switch (product) {
    case "coffee":
      totalCost = coffeePrice * quantity;
      break;
    case "water":
      totalCost = waterPrice * quantity;
      break;
    case "coke":
      totalCost = cokePrice * quantity;
      break;
    case "snacks":
      totalCost = snacksPrice * quantity;
      break;
  }

  console.log(totalCost.toFixed(2));
}

orders("water", 5)
