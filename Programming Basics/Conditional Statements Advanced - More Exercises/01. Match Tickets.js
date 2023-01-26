function solve(input) {
  let budget = Number(input[0]);
  let type = input[1];
  let groupCount = Number(input[2]);

  let vipPrice = 499.99;
  let normalPrice = 249.99;

  let transportPrice;

  if (groupCount <= 4) {
    transportPrice = budget * 0.75;
  } else if (groupCount <= 9) {
    transportPrice = budget * 0.6;
  } else if (groupCount <= 24) {
    transportPrice = budget * 0.5;
  } else if (groupCount <= 49) {
    transportPrice = budget * 0.4;
  } else {
    transportPrice = budget * 0.25;
  }

  if (transportPrice) {
    budget -= transportPrice;
    let cost;
    if(type == 'VIP') {
         cost = vipPrice * groupCount; 
    } else if(type === "Normal") {
         cost = normalPrice * groupCount;
    }
    
    if (cost <= budget) {
      console.log(`Yes! You have ${(budget - cost).toFixed(2)} leva left.`);
    } else {
      console.log(
        `Not enough money! You need ${(cost - budget).toFixed(2)} leva.`
      );
    }
  }
}

solve(["1000", "Normal", "1"]);
solve(["30000", "VIP", "49"]);
