function bombNumbers(arr1, arr2) {
  let num = arr2[0];
  let power = arr2[1];
  let sum = 0;

  while (arr1.includes(num)) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] == num) {
        if (i - power < 0) {
          let index = 0;
          arr1.splice(index, power * 2 + 1);
        } else {
          arr1.splice(i - power, power * 2 + 1);
        }
        break;
      }
    }
  }

  for (el of arr1) {
    sum += el;
  }

  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
