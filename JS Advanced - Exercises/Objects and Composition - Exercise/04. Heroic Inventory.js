function heroicInventory(array) {
  let result = [];
  for (let data of array) {
    let [name, level, items] = data.split(" / ");
    items = items ? items.split(", ") : [];
    let obj = {
      name,
      level: Number(level),
      items,
    };

    result.push(obj);
  }
  console.log(JSON.stringify(result));
}

heroicInventory([
  "Isacc / 25 / GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
