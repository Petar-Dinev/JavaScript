function travelTime(input) {
  let result = {};

  for (let line of input) {
    let [country, town, price] = line.split(" > ");
    price = Number(price);
    if (result[country] == undefined) {
      result[country] = {};
    }
    if (result[country][town] == undefined) {
      result[country][town] = price;
    }
    let currenPrice = result[country][town];
    if (currenPrice > price) {
      result[country][town] = price;
    }
  }

  let sortedCountries = Object.entries(result).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [country, towns] of sortedCountries) {
    let sortTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);
    let output = `${country} ->`;
    for (let [town, price] of sortTowns) {
      output += ` ${town} -> ${price}`;
    }
    console.log(output);
  }
}

// travelTime([
//   "Bulgaria > Sofia > 500",
//   "Bulgaria > Sopot > 800",
//   "France > Paris > 2000",
//   "Albania > Tirana > 1000",
//   "Bulgaria > Sofia > 200",
// ]);

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'])
