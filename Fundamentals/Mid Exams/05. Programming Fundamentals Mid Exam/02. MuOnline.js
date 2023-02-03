function muOnline(input) {
 const rooms = input.split('|');
 let currentHp = 100;
 let bitcoins = 0;
 const commands = {
    potion: function(value) {
        if(value + currentHp > 100) {
            console.log(`You healed for ${100 - currentHp} hp.`);
            currentHp = 100;
        } else {
          currentHp += value;
          console.log(`You healed for ${value} hp.`);
        }
        console.log(`Current health: ${currentHp} hp.`)
    },
    chest: function(value) {
        bitcoins += value;
        console.log(`You found ${value} bitcoins.`);
    }
 }

 for(let i = 0; i < rooms.length; i++) {
   let [command, value] = rooms[i].split(' ');
   value = Number(value);
   if(commands[command] !== undefined) {
    commands[command](value)
   } else {
     currentHp -= value;
     if(currentHp > 0) {
        console.log(`You slayed ${command}.`);
     } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${i + 1}`);
        break;
     }
   }
 }

 if(currentHp > 0) {
   console.log("You've made it!");
   console.log(`Bitcoins: ${bitcoins}`);
   console.log(`Health: ${currentHp}`);
 }
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")