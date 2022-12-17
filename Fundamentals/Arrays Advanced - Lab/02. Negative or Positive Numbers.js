function negativeOrPositiveNumbers(array) {
  let newArr = [];
  array.map(Number);
  for (let num of array) {
    if (num < 0) {
      newArr.unshift(num);
    } else {
      newArr.push(num);
    }
  }
  console.log(newArr.join("\n"));
}
