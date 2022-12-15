function numberModification(num) {
  let numAsString = num.toString();
  let avgNum = 0;
  while (avgNum <= 5) {
    avgNum = 0;

    for (let i = 0; i < numAsString.length; i++) {
      avgNum += Number(numAsString[i]);
    }
    avgNum /= numAsString.length;
    if (avgNum <= 5) {
      numAsString += "9";
    }
  }

  console.log(Number(numAsString));
}

numberModification(101);
numberModification(5835);
