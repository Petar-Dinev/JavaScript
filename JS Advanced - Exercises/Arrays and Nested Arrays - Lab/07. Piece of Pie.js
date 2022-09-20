function pieceOfPie(arr, first, second) {
  let startIndex = arr.indexOf(first);
  let endIndex = arr.indexOf(second);

  let result = arr.slice(startIndex, endIndex + 1);

  return result;
}

pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
