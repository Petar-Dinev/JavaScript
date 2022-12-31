function searchForANumber(arr1, arr2) {
  let numbersForTake = arr2[0];
  let numbersToDelete = arr2[1];
  let searchNum = arr2[2];

  let takeNums = arr1.slice(0, numbersForTake);
  takeNums.splice(0, numbersToDelete);
  let res = takeNums.filter((x) => x == searchNum);
  console.log(`Number ${searchNum} occurs ${res.length} times.`);
  
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
