function solve(input) {
  let magnoliasCount = Number(input[0]);
  let hyacinthsCount = Number(input[1]);
  let rosesCount = Number(input[2]);
  let cactusesCount = Number(input[3]);
  let giftPrice = Number(input[4]);
  let magnoliasPrice = 3.25;
  let hyacinthsPrice = 4;
  let rosesPrice = 3.5;
  let cactusesPrice = 8;
  let taxes = 5 / 100;

  let totalPrice =
    magnoliasCount * magnoliasPrice +
    hyacinthsCount * hyacinthsPrice +
    rosesCount * rosesPrice +
    cactusesCount * cactusesPrice;
  totalPrice -= totalPrice * taxes;
  let diff = Math.abs(totalPrice - giftPrice);
  if (totalPrice >= giftPrice) {
    console.log(`She is left with ${Math.floor(diff)} leva.`);
  } else {
    console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
  }
}

solve(["2", "3", "5", "1", "50"]);
solve(["15", "7", "5", "10", "100"]);
