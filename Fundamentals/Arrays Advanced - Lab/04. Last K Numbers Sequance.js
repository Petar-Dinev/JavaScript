function lastKNumberSequance(n, k) {
  let arr = [1];

  for (let l = 1; l < n; l++) {
    let currArr = arr.slice(-k);
    let tempSum = 0;
    for (i = 0; i < currArr.length; i++) {
      tempSum += currArr[i];
    }
    arr.push(tempSum);
  }
  console.log(arr.join(" "));
}
