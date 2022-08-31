function petShop(input) {
  let dogFoodPrice = 2.5;
  let catFoodPrice = 4;
  let dogFoodPackages = Number(input[0]);
  let catFoodPackages = Number(input[1]);
  let total = dogFoodPrice * dogFoodPackages + catFoodPrice * catFoodPackages;

  console.log(total);
}

petShop(["5 ", "4 "]);
