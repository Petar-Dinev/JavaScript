function vacation(countOfPeople, typeOfGroup, dayOfWeek) {
  let price = countOfPeople;

  switch (typeOfGroup) {
    case "Students":
      switch (dayOfWeek) {
        case "Friday":
          price *= 8.45;
          break;
        case "Saturday":
          price *= 9.8;
          break;
        case "Sunday":
          price *= 10.46;
          break;
      }
      if (countOfPeople >= 30) {
        price *= 0.85;
      }
      break;
    case "Business":
      if (countOfPeople >= 100) {
        price -= 10;
      }
      switch (dayOfWeek) {
        case "Friday":
          price *= 10.9;
          break;
        case "Saturday":
          price *= 15.6;
          break;
        case "Sunday":
          price *= 16;
          break;
      }
      break;
    case "Regular":
      switch (dayOfWeek) {
        case "Friday":
          price *= 15;
          break;
        case "Saturday":
          price *= 20;
          break;
        case "Sunday":
          price *= 22.5;
          break;
      }
      if (countOfPeople >= 10 && countOfPeople <= 20) {
        price *= 0.95;
      }
      break;
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
