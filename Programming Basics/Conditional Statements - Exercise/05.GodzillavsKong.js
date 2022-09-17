function godzillaVsKong(input) {
  const budget = Number(input[0]);
  const stuntMans = Number(input[1]);
  const priceForClothForOneStuntMan = Number(input[2]);

  const decor = budget * 0.1;
  let totalCostForClothes = stuntMans * priceForClothForOneStuntMan;

  if (stuntMans > 150) {
    totalCostForClothes *= 0.9;
  }

  totalCost = decor + totalCostForClothes;

  if (totalCost > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
  }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["9587.88", "222", "55.68"]); 
