function amazingNumbers(num) {
  let numAsString = num.toString();
  let sum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
  }

  let isAmazing = "False";
  let sumAsString = sum.toString();
  if (sumAsString.includes("9")) {
    isAmazing = "True";
  }

  console.log(`${num} Amazing? ${isAmazing}`);
}

amazingNumbers(1233);
amazingNumbers(999);
