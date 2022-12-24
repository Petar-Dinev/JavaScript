function blackFlag(input) {
  let [days, dayplunder, goal] = input.map(Number);
  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    if (i % 3 == 0) {
      totalPlunder += dayplunder * 1.5;
    } else {
      totalPlunder += dayplunder;
    }
    if (i % 5 == 0) {
      totalPlunder *= 0.7;
    }
  }

  if (totalPlunder >= goal) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(
      `Collected only ${((totalPlunder / goal) * 100).toFixed(
        2
      )}% of the plunder.`
    );
  }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
