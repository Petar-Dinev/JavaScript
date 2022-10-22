function solution() {
  let receptions = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  let storage = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  let commands = {
    restock,
    prepare,
    report,
  };
  return function breakfastRobot(input) {
    let [command, type, quantity] = input.split(" ");
    quantity = Number(quantity);
    return commands[command](type, quantity);
  };

  function restock(microelement, quantity) {
    storage[microelement] += quantity;
    return "Success";
  }
  function report() {
    return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
  }
  function prepare(recipe, quantity) {
    let needProducts = {};
    for (let microEl of Object.entries(receptions[recipe])) {
      needProducts[microEl[0]] = microEl[1] * quantity;
    }

    for (let needMicroEl of Object.entries(needProducts)) {
      if (needMicroEl[1] > storage[needMicroEl[0]]) {
        return `Error: not enough ${needMicroEl[0]} in stock`;
      } else {
        storage[needMicroEl[0]] -= needMicroEl[1];
      }
    }
    return "Success";
  }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4"));
