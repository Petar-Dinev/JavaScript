function magicMatrices(matrix) {
  let isMagic = true;
  let matrixLength = matrix.length;

  for (let row = 0; row < matrixLength - 1; row++) {
    let rowSum = 0;
    let row2Sum = 0;
    let colSum = 0;
    let col2Sum = 0;
    for (let col = 0; col < matrixLength; col++) {
      rowSum += matrix[row][col];
      row2Sum += matrix[row + 1][col];
      colSum += matrix[col][row];
      col2Sum += matrix[col][row + 1];
    }
    if (row2Sum != rowSum || colSum != col2Sum) {
      isMagic = false;
    }
  }

  console.log(isMagic);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
