function printNelements(arr) {
  let step = Number(arr[arr.length - 1]);
  let output = "";

  for (let i = 0; i < arr.length - 1; i += step) {
    output += `${arr[i]} `;
  }

  console.log(output);
}

printNelements(["5", "20", "31", "4", "20", "2"]);
