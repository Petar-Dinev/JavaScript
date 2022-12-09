function spiceMustFlow(startingYield) {
  let spiceAmount = 0;
  let days = 0;
  let currectYield = startingYield;

  while (currectYield >= 100) {
    days++;
    spiceAmount += currectYield - 26;
    currectYield -= 10;
  }
  if (spiceAmount >= 26) {
    spiceAmount -= 26;
  }
  //    if(days > 0) {
  console.log(days);
  console.log(spiceAmount);
  // } else {
  // console.log(days);
  // console.log(startingYield);
  // }
}
