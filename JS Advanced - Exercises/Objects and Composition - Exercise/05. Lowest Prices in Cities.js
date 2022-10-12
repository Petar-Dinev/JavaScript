function lowestPricesInCities(array) {
  let obj = {};

  for (let data of array) {
    let [townName, productName, productPrice] = data.split(" | ");
    productPrice = Number(productPrice);
    if (obj[productName] == undefined) {
      obj[productName] = { townName, productPrice };
    } else {
      if (obj[productName].productPrice > productPrice) {
        obj[productName] = { townName, productPrice };
      }
    }
  }
  for (let kvp of Object.entries(obj)) {
    console.log(`${kvp[0]} -> ${kvp[1].productPrice} (${kvp[1].townName})`);
  }
}

// lowestPricesInCities([
//   "Sample Town | Sample Product | 1000",
//   "Sample Town | Orange | 2",
//   "Sample Town | Peach | 1",
//   "Sofia | Orange | 3",
//   "Sofia | Peach | 2",
//   "New York | Sample Product | 1000.1",
//   "New York | Burger | 10",
// ]);

lowestPricesInCities([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
