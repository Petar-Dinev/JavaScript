function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let numAsString = i.toString();
    let sum = 0;
    for (let k = 0; k < numAsString.length; k++) {
      sum += Number(numAsString[k]);
    }
    if (sum == 5 || sum == 7 || sum == 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(15)