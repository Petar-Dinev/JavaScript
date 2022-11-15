function inventory(input) {
  let heroes = [];
  for (let data of input) {
    let [name, level, items] = data.split(" / ");
    let hero = {
      name,
      level: Number(level),
      items: items.split(", "),
    };
    heroes.push(hero);
  }

  let result = heroes.sort((a, b) => a.level - b.level);
  for (let el of result) {
    console.log(`Hero: ${el.name}`);
    console.log(`level => ${el.level}`);
    console.log(`items => ${el.items.join(", ")}`);
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
