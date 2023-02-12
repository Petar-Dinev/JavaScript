function heroesOfCodeAndLogic(input) {
  let heroesCount = Number(input.shift());
  let heroes = [];
  for (let i = 0; i < heroesCount; i++) {
    let line = input.shift();
    let [name, hp, mp] = line.split(" ");
    hp = Number(hp);
    mp = Number(mp);
    let hero = {
      name,
      hp,
      mp,
    };
    heroes.push(hero);
  }
  let commands = {
    CastSpell,
    TakeDamage,
    Recharge,
    Heal,
  };
  while (input[0] != "End") {
    let info = input.shift();
    let [command, nameOfHero, value, monsterOrSpell] = info.split(" - ");
    let action = commands[command];
    value = Number(value);
    action(nameOfHero, value, monsterOrSpell);
  }

  function CastSpell(name, mana, spell) {
    let hero = heroes.find((x) => x.name == name);

    if (hero.mp >= mana) {
      hero.mp -= mana;
      console.log(
        `${hero.name} has successfully cast ${spell} and now has ${hero.mp} MP!`
      );
    } else {
      console.log(`${hero.name} does not have enough MP to cast ${spell}!`);
    }
  }

  function TakeDamage(name, health, monster) {
    let hero = heroes.find((x) => x.name == name);

    if (hero.hp > health) {
      hero.hp -= health;
      console.log(
        `${hero.name} was hit for ${health} HP by ${monster} and now has ${hero.hp} HP left!`
      );
    } else {
      console.log(`${name} has been killed by ${monster}!`);
      heroes.splice(
        heroes.findIndex((x) => x.name == name),
        1
      );
    }
  }

  function Recharge(name, mana) {
    let hero = heroes.find((x) => x.name == name);
    let manaRecovered = mana;
    if (hero.mp + mana > 200) {
      manaRecovered = mana - (hero.mp + mana - 200);
    }
    hero.mp += manaRecovered;
    console.log(`${hero.name} recharged for ${manaRecovered} MP!`);
  }

  function Heal(name, health) {
    let hero = heroes.find((x) => x.name == name);
    let hpRestored = health;
    if (hero.hp + health > 100) {
      hpRestored = health - (hero.hp + health - 100);
    }
    hero.hp += hpRestored;
    console.log(`${hero.name} healed for ${hpRestored} HP!`);
  }

  for (let hero of heroes) {
    console.log(hero.name);
    console.log(`  HP: ${hero.hp}`);
    console.log(`  MP: ${hero.mp}`);
  }
}

heroesOfCodeAndLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
