function storage(input) {
  let result = new Map();

  for (let data of input) {
    let [product, quantity] = data.split(" ");
    quantity = Number(quantity);

    if (result.has(product)) {
      let currentQuantity = result.get(product);
      result.set(product, currentQuantity + quantity);
    } else {
      result.set(product, quantity);
    }
  }
  for (let key of result.keys()) {
    console.log(key, "->", result.get(key));
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
