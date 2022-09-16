function sameNumbers(num) {
  let numAsString = String(num);
  let firstDiggit = numAsString[0];
  let sum = Number(firstDiggit);
  let isSame = true;

  for (let i = 1; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
    if (numAsString[i] !== firstDiggit) {
      isSame = false;
    }
  }

  console.log(isSame);
  console.log(sum);
}

sameNumbers(1234);
sameNumbers(2222222);
