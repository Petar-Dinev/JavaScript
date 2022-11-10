function storeProvision(localStore, delivery) {
  let result = {};
  for (let i = 0; i < localStore.length; i += 2) {
    result[localStore[i]] = Number(localStore[i + 1]);
  }

  for (let i = 0; i < delivery.length; i += 2) {
    if (result[delivery[i]] == undefined) {
      result[delivery[i]] = Number(delivery[i + 1]);
    } else {
      result[delivery[i]] += Number(delivery[i + 1]);
    }
  }

  for (let key in result) {
    console.log(`${key} -> ${result[key]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
