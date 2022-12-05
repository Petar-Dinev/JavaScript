function pets(input) {
  let days = Number(input[0]);
  let totalFood = Number(input[1]);
  let dogFoodForDay = Number(input[2]);
  let catFoodForDay = Number(input[3]);
  let turtleFoodForDay = Number(input[4]);

  totalFood -=
    days * dogFoodForDay +
    days * catFoodForDay +
    (days * turtleFoodForDay) / 1000;
  if (totalFood >= 0) {
    console.log(`${Math.floor(totalFood)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(totalFood * -1)} more kilos of food are needed.`);
  }
}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);
