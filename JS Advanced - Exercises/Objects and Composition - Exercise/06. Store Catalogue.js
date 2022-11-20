function storeCatalogue(arr) {
  let result = {};

  for (let el of arr) {
    let [product, value] = el.split(" : ");
    if (result[product[0]] == undefined) {
      result[product[0]] = [];
    }
    result[product[0]].push(`${product}: ${value}`);
  }
  let sortResult = Object.keys(result).sort((a, b) => a.localeCompare(b));
  for (let el of sortResult) {
    console.log(el);
    result[el]
      .sort((a, b) => a.localeCompare(b))
      .forEach((el) => {
        console.log(` ${el}`);
      });
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
