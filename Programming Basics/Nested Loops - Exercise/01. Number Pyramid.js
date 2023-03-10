function solve(input) {
  let num = Number(input[0]);
  let isBigger = false;
  let current = 0;
  for (let i = 1; i <= num; i++) {
    let output = "";
    for (let k = 1; k <= i; k++) {
      current++;
      output += `${current} `;
      if (current >= num) {
        isBigger = true;
        break;
      }
    }
    console.log(output.trim());
    if (isBigger) {
      break;
    }
  }
}

solve(["7"]);
// solve(["12"])
