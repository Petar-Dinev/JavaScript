function processOddNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      result.push(arr[i] * 2);
    }
  }

  let output = "";

  for (let i = result.length - 1; i >= 0; i--) {
    output += result[i] + " ";
  }

  console.log(output);
}

processOddNumbers([10, 15, 20, 25]);
