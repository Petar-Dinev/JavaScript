function biggestElement(matrix) {
  let biggestEl = matrix[0][0];

  for (let arr of matrix) {
    for (let el of arr) {
      if (el >= biggestEl) {
        biggestEl = el;
      }
    }
  }

  return biggestEl;
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
