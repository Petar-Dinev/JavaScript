function combinations(num) {
  let combinationCounts = 0;

  for (let i = 0; i <= num; i++) {
    for (let k = 0; k <= num; k++) {
      for (let l = 0; l <= num; l++) {
        let result = i + k + l;
        if (result == num) {
          combinationCounts++;
        }
      }
    }
  }

  console.log(combinationCounts);
}

combinations(25);
