function cinema(input) {
  //     •	Premiere – премиерна прожекция, на цена 12.00 лева.
  // •	Normal – стандартна прожекция, на цена 7.50 лева.
  // •	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.

  const premierePrice = 12;
  const normalPrice = 7.5;
  const discountPrice = 5;

  const projection = input[0];
  const rows = Number(input[1]);
  const cols = Number(input[2]);

  let income = rows * cols;

  switch (projection) {
    case "Premiere":
      income *= premierePrice;
      break;
    case "Normal":
      income *= normalPrice;
      break;
    case "Discount":
      income *= discountPrice;
      break;
  }
  console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
