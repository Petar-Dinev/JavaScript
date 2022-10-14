function argumentInfo(...arguments) {
  let myObj = {};

  for (let arg of arguments) {
    let typeOfArg = typeof arg;
    console.log(`${typeOfArg}: ${arg}`);
    if (!myObj.hasOwnProperty(typeOfArg)) {
      myObj[typeOfArg] = 0;
    }
    myObj[typeOfArg]++;
  }
  let sortedResult = Object.entries(myObj).sort((a, b) => b[1] - a[1]);
  for (let arr of sortedResult) {
    console.log(`${arr[0]} = ${arr[1]}`);
  }
}

argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
