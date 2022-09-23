function newHouse(input) {
  const rosesPrice = 5;
  const dahliasPrice = 3.8;
  const tulipsPrice = 2.8;
  const narcissusPrice = 3;
  const gladiolusPrice = 2.5;
  const flowerType = input[0];
  const flowerCount = Number(input[1]);
  const budget = Number(input[2]);

  let totalMoney = flowerCount;

  switch (flowerType) {
    case "Roses":
      totalMoney *= rosesPrice;
      if (flowerCount > 80) {
        totalMoney *= 0.9;
      }
      break;
    case "Dahlias":
      totalMoney *= dahliasPrice;
      if (flowerCount > 90) {
        totalMoney *= 0.85;
      }
      break;
    case "Tulips":
      totalMoney *= tulipsPrice;
      if (flowerCount > 80) {
        totalMoney *= 0.85;
      }
      break;
    case "Narcissus":
      totalMoney *= narcissusPrice;
      if (flowerCount < 120) {
        totalMoney *= 1.15;
      }
      break;
    case "Gladiolus":
      totalMoney *= gladiolusPrice;
      if (flowerCount < 80) {
        totalMoney *= 1.2;
      }
      break;
  }
  const diff = Math.abs(budget - totalMoney).toFixed(2);
  if (budget < totalMoney) {
    console.log(`Not enough money, you need ${diff} leva more.`);
  } else {
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff} leva left.`
    );
  }
}

newHouse(["Roses", "55", "250"]);
