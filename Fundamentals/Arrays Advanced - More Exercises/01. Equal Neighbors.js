function equalNeighbors(matrix) {
  let res = 0;

  let length = matrix[0].length;

  for (let k = 0; k < matrix.length; k++) {
    for (let l = 0; l < length; l++) {
      if (matrix[k][l] == matrix[k][l + 1]) {
        res++;
      }
      if (k != matrix.length - 1) {
        if (matrix[k][l] == matrix[k + 1][l]) {
          res++;
        }
      }
    }
  }

  console.log(res);
}

equalNeighbors([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);
