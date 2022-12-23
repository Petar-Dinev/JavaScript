function shoppingList(input) {
  let shopList = input.shift().split("!");
  let currentLine = input.shift();

  while (currentLine != "Go Shopping!") {
    let [command, product, newProduct] = currentLine.split(" ");

    switch (command) {
      case "Urgent":
        if (!shopList.includes(product)) {
          shopList.unshift(product);
        }
        break;
      case "Unnecessary":
        if (shopList.includes(product)) {
          shopList = shopList.filter((x) => x != product);
        }
        break;
      case "Correct":
        if (shopList.includes(product)) {
          let indexOfOldProduct = shopList.indexOf(product);
          shopList.splice(indexOfOldProduct, 1, newProduct);
        }
        break;
      case "Rearrange":
        if (shopList.includes(product)) {
          let index = shopList.indexOf(product);
          let productForMove = shopList.splice(index, 1);
          shopList.push(productForMove[0]);
        }
        break;
    }

    currentLine = input.shift();
  }

  console.log(shopList.join(", "));
}

// shoppingList([
//   "Tomatoes!Potatoes!Bread",
//   "Unnecessary Milk",
//   "Urgent Tomatoes",
//   "Go Shopping!",
// ]);
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",

  "Urgent Salt",

  "Unnecessary Grapes",
  "Urgent Grapes",
  "Correct Pepper Onion",

  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
