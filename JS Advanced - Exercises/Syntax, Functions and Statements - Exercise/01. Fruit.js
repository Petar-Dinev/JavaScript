function fruit(fruit, weight, price) {
  let weightInKilos = weight / 1000;
  let cost = weightInKilos * price;

  console.log(
    `I need $${cost.toFixed(2)} to buy ${weightInKilos.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

fruit("orange", 2500, 1.8);
