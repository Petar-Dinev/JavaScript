function smallShop(input) {
  const product = input[0];
  const town = input[1];
  const amount = Number(input[2]);

  let totalPrice = 0;

  switch (town) {
    case "Sofia":
      switch (product) {
        case "coffee":
          totalPrice = 0.5;
          break;
        case "water":
          totalPrice = 0.8;
          break;
        case "beer":
          totalPrice = 1.2;
          break;
        case "sweets":
          totalPrice = 1.45;
          break;
        case "peanuts":
          totalPrice = 1.6;
          break;
      }
      break;
    case "Plovdiv":
      switch (product) {
        case "coffee":
          totalPrice = 0.4;
          break;
        case "water":
          totalPrice = 0.7;
          break;
        case "beer":
          totalPrice = 1.15;
          break;
        case "sweets":
          totalPrice = 1.3;
          break;
        case "peanuts":
          totalPrice = 1.5;
          break;
      }
      break;
    case "Varna":
      switch (product) {
        case "coffee":
          totalPrice = 0.45;
          break;
        case "water":
          totalPrice = 0.7;
          break;
        case "beer":
          totalPrice = 1.1;
          break;
        case "sweets":
          totalPrice = 1.35;
          break;
        case "peanuts":
          totalPrice = 1.55;
          break;
      }
      break;
  }
  totalPrice *= amount;
  console.log(totalPrice);
}
