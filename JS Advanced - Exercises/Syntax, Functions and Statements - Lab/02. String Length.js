function stringLength(stringOne, stringTwo, stringThree) {
  let firstLength = stringOne.length;
  let secondLength = stringTwo.length;
  let thirdLength = stringThree.length;
  let totalLength = firstLength + secondLength + thirdLength;
  let avgLength = Math.round(totalLength / 3);

  console.log(totalLength);
  console.log(avgLength);
}

stringLength("chocolate", "ice cream", "cake");
