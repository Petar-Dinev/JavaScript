function armies(input) {
  let result = {};

  for (let line of input) {
    if (line.includes("arrives")) {
      let name = line.split(" arrives")[0]
      if (result[name] === undefined) {
        result[name] = {
            totalArmy: 0
        };
      }
    } else if (line.includes("defeated")) {
      let name = line.split(" defeated")[0];
      delete result[name];
    } else if (line.includes("+")) {
      let [armyName, count] = line.split(" + ");
      count = Number(count);
      for (let leader in result) {
        for (let army in result[leader]) {
          if (army == armyName) {
            result[leader][army] += count;
            result[leader].totalArmy += count;
          }
        }
      }
    } else {
      let [leader, armieInfo] = line.split(": ");
      let [armyName, count] = armieInfo.split(", ");
      count = Number(count);
      if (result[leader] !== undefined) {
        result[leader][armyName] = count;
        result[leader].totalArmy += count;
      }
    }
  }

  let sorted = (Object.entries(result)).sort((a, b) => b[1].totalArmy - a[1].totalArmy)
  for(let [leader, army] of sorted) {
    console.log(`${leader}: ${result[leader]['totalArmy']}`);
    delete army.totalArmy;
    let sortArmy = Object.entries(army).sort((a, b) => b[1] -a[1])
    for(let el of sortArmy) {
        console.log(`>>> ${el[0]} - ${el[1]}`);
    }
    
  }

}

armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
// armies();
