function condenseArrayToNumber(arr) {
  while (arr.length > 1) {
    let myArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let currentNum = Number(arr[i]) + Number(arr[i + 1]);
      myArr.push(currentNum);
    }
    arr = myArr;
  }
  console.log(arr[0]);
}

condenseArrayToNumber(["2", "10", "3"]);
condenseArrayToNumber([5,0,4,1,2]);
