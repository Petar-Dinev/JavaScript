function largestNumber(first, second, third) {
  let result = 0;
  if (first > second && first > third) {
    result = first;
  } else if (second > first && second > third) {
    result = second;
  } else {
    result = third;
  }

  console.log(`The largest number is ${result}.`);
}

largestNumber(-3, -5, -22.5);
