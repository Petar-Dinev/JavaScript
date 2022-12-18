function firstAndLastKNumbers(array) {
  let k = array.shift();

  let firstNums = array.slice(0, k);
  let lastNums = array.slice(-k, array.length);

  console.log(firstNums.join(" "));
  console.log(lastNums.join(" "));
}
