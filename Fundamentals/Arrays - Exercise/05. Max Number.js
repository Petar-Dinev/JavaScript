function maxNumber(arr) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isBigger = true;
    let curentNum = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      if (curentNum <= arr[k]) {
        isBigger = false;
      }
    }
    if (isBigger) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}

maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
