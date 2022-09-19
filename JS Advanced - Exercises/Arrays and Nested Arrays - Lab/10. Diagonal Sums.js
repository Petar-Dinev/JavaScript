function diagonalSums(matrix) {
  let mainDiagonalSum = 0;
  let secondDiagonalSum = 0;
  let arrsLength = matrix.length;

  for (let i = 0; i < arrsLength; i++) {
    mainDiagonalSum += matrix[i][i];
    secondDiagonalSum += matrix[i][arrsLength - 1 - i];
  }
  console.log(mainDiagonalSum, secondDiagonalSum);
}

diagonalSums([
  [20, 40],
  [10, 60],
]);
