function spiralMatrix(row, col) {
  counter = 1;
  startRow = 0;
  startCol = 0;

  let result = [];

  for (let i = 0; i < row; i++) {
    let currentArr = [];
    currentArr.length = row;
    result.push(currentArr);
  }

  while (startRow <= row && startCol <= col) {
    for (let i = startCol; i < col; i++) {
      result[startCol][i] = counter++;
    }
    startRow++;

    for (let i = startRow; i <= row - 1; i++) {
      result[i][col - 1] = counter++;
    }
    col--;

    for (let i = col - 1; i >= startCol; i--) {
      result[row - 1][i] = counter++;
    }
    row--;

    for (let i = row - 1; i >= startRow; i--) {
      result[i][startCol] = counter++;
    }
    startCol++;
  }

  result.forEach((row) => console.log(row.join(" ")));
}

spiralMatrix(3, 3);
spiralMatrix(5, 5);
