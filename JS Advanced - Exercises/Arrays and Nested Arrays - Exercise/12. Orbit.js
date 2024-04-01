function solve(input) {
    let matrixLength = input[0]
    let starFirstIndex = input[2];
    let starSecondIndex = input[3];
    let value = 2;

    let matrix = []
    for (let i = 0; i < matrixLength; i++) {
        matrix.push(Array(matrixLength))
    }
    matrix[starFirstIndex][starSecondIndex] = 1;

    for (let i = 0; i < matrixLength; i++) {
        for (let k = starFirstIndex - 1 - i; k <= starFirstIndex + 1 + i; k++) {
            for (let l = starSecondIndex - 1 - i; l <= starSecondIndex + 1 + i; l++) {
                if (k >= 0 && k < matrixLength && l >= 0 && l < matrixLength && matrix[k][l] == undefined) {
                    matrix[k][l] = value;
                }
            }
        }
        value += 1;
    }

    console.log(matrix.map(el => el.join(' ')).join('\n'));
}

solve([4, 4, 0, 0])
solve([5, 5, 2, 2])
solve([3, 3, 2, 2])