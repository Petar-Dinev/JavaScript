function coins(input) {
  let change = Number(input[0]);
  let coins = 0;
  let changeInHundreds = parseInt(change * 100);

  while (changeInHundreds > 0) {
    if (changeInHundreds - 200 >= 0) {
      coins++;
      changeInHundreds -= 200;
    } else if (changeInHundreds - 100 >= 0) {
      coins++;
      changeInHundreds -= 100;
    } else if (changeInHundreds - 50 >= 0) {
      coins++;
      changeInHundreds -= 50;
    } else if (changeInHundreds - 20 >= 0) {
      coins++;
      changeInHundreds -= 20;
    } else if (changeInHundreds - 10 >= 0) {
      coins++;
      changeInHundreds -= 10;
    } else if (changeInHundreds - 5 >= 0) {
      coins++;
      changeInHundreds -= 5;
    } else if (changeInHundreds - 2 >= 0) {
      coins++;
      changeInHundreds -= 2;
    } else if (changeInHundreds - 1 >= 0) {
      coins++;
      changeInHundreds -= 1;
    }
  }
  console.log(coins);
}
