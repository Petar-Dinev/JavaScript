function skiTrip(input) {
  const days = Number(input[0]);
  const typeOFRoom = input[1];
  const evaluation = input[2];
  const nights = days - 1;

  const roomForOnePersonPrice = 18;
  const apartmentPrice = 25;
  const presidentApartmentPrice = 35;

  let totalCost = 0;

  switch (typeOFRoom) {
    case "room for one person":
      totalCost = roomForOnePersonPrice * nights;
      break;
    case "apartment":
      totalCost = apartmentPrice * nights;
      if (days < 10) {
        totalCost *= 0.7;
      } else if (days >= 10 && days <= 15) {
        totalCost *= 0.65;
      } else {
        totalCost *= 0.5;
      }
      break;
    case "president apartment":
      totalCost = presidentApartmentPrice * nights;
      if (days < 10) {
        totalCost *= 0.9;
      } else if (days >= 10 && days <= 15) {
        totalCost *= 0.85;
      } else {
        totalCost *= 0.8;
      }
      break;
  }

  if (evaluation === "positive") {
    totalCost *= 1.25;
  } else {
    totalCost *= 0.9;
  }
  console.log(totalCost.toFixed(2));
}
