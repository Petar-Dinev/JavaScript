function gladiatorExpenses(
  lostCounts,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let shieldBreakCount = 0;
  for (let i = 1; i <= lostCounts; i++) {
    if (i % 2 === 0) {
      expenses += helmetPrice;
    }
    if (i % 3 === 0) {
      expenses += swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      expenses += shieldPrice;
      shieldBreakCount++;
    }
    if (i % 12 === 0) {
      expenses += armorPrice;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
