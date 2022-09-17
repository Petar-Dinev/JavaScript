function vegetableMarket(input) {
    let vegetablesPrice = Number(input[0]);
    let fruitsPrice = Number(input[1]);
    let vegetablesKilograms = Number(input[2]);
    let fruitsKilograms =Number(input[3]);
    let totalCost = vegetablesKilograms * vegetablesPrice + fruitsKilograms * fruitsPrice;
    let change = 1.94;
    let totalCostInEuro = totalCost / change;
    console.log(totalCostInEuro.toFixed(2));
}

vegetableMarket(["0.194", "19.4", "10", "10"])