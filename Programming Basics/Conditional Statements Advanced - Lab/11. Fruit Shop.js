function fruitShop(input) {
  const fruit = input[0];
  const day = input[1];
  const amount = Number(input[2]);

  let cost = 0;

  switch (fruit) {
    case "banana":
      switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
          cost = 2.5;
          break;
        case "Saturday":
        case "Sunday":
          cost = 2.7;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "apple":
      switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
          cost = 1.2;
          break;
        case "Saturday":
        case "Sunday":
          cost = 1.25;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "orange":
      switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
          cost = 0.85;
          break;
        case "Saturday":
        case "Sunday":
          cost = 0.9;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "grapefruit":
      switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
          cost = 1.45;
          break;
        case "Saturday":
        case "Sunday":
          cost = 1.6;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "kiwi":
      switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
          cost = 2.7;
          break;
        case "Saturday":
        case "Sunday":
          cost = 3.0;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "pineapple":
      switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
          cost = 5.5;
          break;
        case "Saturday":
        case "Sunday":
          cost = 5.6;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "grapes":
      switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
          cost = 3.85;
          break;
        case "Saturday":
        case "Sunday":
          cost = 4.2;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    default:
      console.log("error");
  }
  if (cost !== 0) {
    cost *= amount;
    console.log(cost.toFixed(2));
  }
}

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
