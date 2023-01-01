function gladiatorInventory(input) {
  let inventory = input.shift().split(" ");

  for (let i = 0; i < input.length; i++) {
    let [command, item] = input[i].split(" ");
    switch (command) {
      case "Buy":
        if (!inventory.includes(item)) {
          inventory.push(item);
        }
        break;
      case "Trash":
        inventory = inventory.filter((x) => x != item);
        break;
      case "Repair":
        let index = inventory.indexOf(item);
        if (index >= 0) {
          inventory.push(inventory.splice(index, 1)[0]);
        }
        break;
      case "Upgrade":
        let index2 = inventory.indexOf(item.split("-")[0]);
        if (index2 >= 0) {
          inventory.splice(index2 + 1, 0, item.split("-").join(":"));
        }
        break;
    }
  }

  console.log(inventory.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
