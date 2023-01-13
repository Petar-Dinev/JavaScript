function sequences(input) {
  let result = [];

  for (let line of input) {
    let curentArr = JSON.parse(line);
    curentArr.sort((a, b) => b - a);

    if (result.length == 0) {
      result.push(curentArr);
    }

    let isInclude = true;
    for (let arr of result) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] != curentArr[i]) {
          isInclude = false;
          break;
        } else {
          isInclude = true;
        }
      }
      if (isInclude) {
        break;
      }
    }
    if (!isInclude) {
      result.push(curentArr);
    }
  }

  result.sort((a, b) => a.length - b.length);

  for (let el of result) {
    console.log(`[${el.join(", ")}]`);
  }
}

sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
sequences([
  "[7.14, 7.180, 7.339, 80.099]",
  "[7.339, 80.0990, 7.140000, 7.18]",
  "[7.339, 7.180, 7.14, 80.099]",
]);
