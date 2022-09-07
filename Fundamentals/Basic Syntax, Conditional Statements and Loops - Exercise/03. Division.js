function division(num) {
  let divisor = 0;
  if (num % 10 == 0) {
    divisor = 10;
  } else if (num % 7 == 0) {
    divisor = 7;
  } else if (num % 6 == 0) {
    divisor = 6;
  } else if (num % 3 == 0) {
    divisor = 3;
  } else if (num % 2 == 0) {
    divisor = 2;
  }

  if (divisor == 0) {
    console.log("Not divisible");
  } else {
    console.log(`The number is divisible by ${divisor}`);
  }
}

division(30);
division(15);
division(12);
division(1643);
