function nxNMatrix(n) {
  let myArr = [];
  for (let i = 0; i < n; i++) {
    let output = "";
    for (let k = 0; k < n; k++) {
      output += `${n} `;
    }
    myArr.push(output);
  }
  console.log(myArr.join("\n"));
}

nxNMatrix(3);
