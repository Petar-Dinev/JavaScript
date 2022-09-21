function equalNeighbors(matrix) {
  let firstArr = matrix[0];
  let match = 0;

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let k = 0; k < firstArr.length; k++) {
      if (matrix[i][k] === matrix[i + 1][k]) {
        match++;
      }
    }
  }

  for (let i = 0; i < firstArr.length - 1; i++) {
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][i] === matrix[k][i + 1]) {
        match++;
      }
    }
  }

  return match;
}

equalNeighbors([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);

equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "5", "4"],
]);
