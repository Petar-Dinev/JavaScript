function solve(arr) {
  let passengersInWagonsArr = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let currectCommand = arr[i].split(" ");
    if (currectCommand[0] === "Add") {
      passengersInWagonsArr.push(Number(currectCommand[1]));
    } else {
      for (let a = 0; a < passengersInWagonsArr.length; a++) {
        if (
          Number(currectCommand[0]) + passengersInWagonsArr[a] <=
          maxCapacity
        ) {
          passengersInWagonsArr[a] += Number(currectCommand[0]);
          break;
        }
      }
    }
  }
  console.log(passengersInWagonsArr.join(" "));
}
