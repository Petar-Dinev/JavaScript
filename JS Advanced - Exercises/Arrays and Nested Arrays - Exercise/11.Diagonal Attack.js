function solve(arrOfStrings) {
    let matrix = arrOfStrings.map(el => el.split(' '))
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    const diagonalsIndex = [];
    const matrixLength = Number(matrix.length);

    for (let i = 0; i < matrixLength; i++) {
        const currentFirstElIndex = `${i}${i}`
        const currentSecondElIndex = `${i}${matrixLength - 1 - i}`
        const currentFirstDiagonalEl = matrix[i][i]
        const currentSecondDiagonalEl = matrix[i][matrixLength - 1 - i]
        firstDiagonalSum += Number(currentFirstDiagonalEl)
        secondDiagonalSum += Number(currentSecondDiagonalEl)
        diagonalsIndex.push(currentFirstElIndex)
        diagonalsIndex.push(currentSecondElIndex)
    }

    if (firstDiagonalSum == secondDiagonalSum) {
        for (let i = 0; i < matrixLength; i++) {
            for (let k = 0; k < matrixLength; k++) {
                if (!diagonalsIndex.includes(`${i}${k}`)) {
                    matrix[i][k] = firstDiagonalSum;
                }
            }
        }
        console.log(matrix.map(el => el.join(' ')).join('\n'));
    } else {
        console.log(arrOfStrings.join('\n'));
    }

}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)

solve(['1 1 1',
    '1 1 1',
    '1 1 0']
)