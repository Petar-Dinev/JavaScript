function catalogue(input) {
  let result = {};

  for (let line of input) {
    let [product, price] = line.split(" : ");
    price = Number(price);
    let firstChar = product[0];
    if (result[firstChar] === undefined) {
      result[firstChar] = [];
    }

    result[firstChar].push({ [product]: price });
  }

  let sorted = Object.keys(result).sort();

  for (let key of sorted) {
    console.log(key);
    let sortedObj = result[key].sort((a, b) => {
      return Object.entries(a)[0][0].localeCompare(Object.entries(b)[0][0]);
    });
    for (let obj of sortedObj) {
      for (let key in obj) {
        console.log(`  ${key}: ${obj[key]}`);
      }
    }
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
