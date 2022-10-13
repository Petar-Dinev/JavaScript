function hotelRoom(input) {
  const mayAndOctoberApartmentPrice = 65;
  const mayAndOctoberStudioPrice = 50;
  const juneAndSeptemberApartmentPrice = 68.7;
  const juneAndSeptemberStudioPrice = 75.2;
  const julyAndAugustApartmentPrice = 77;
  const julyAndAugustStudioPrice = 76;
  const month = input[0];
  const days = Number(input[1]);

  let apartmentCost = 0;
  let studioCost = 0;

  switch (month) {
    case "May":
    case "October":
      apartmentCost = mayAndOctoberApartmentPrice * days;
      studioCost = mayAndOctoberStudioPrice * days;
      if (days > 7 && days < 14) {
        studioCost *= 0.95;
      } else if (days > 14) {
        studioCost *= 0.7;
      }
      break;
    case "June":
    case "September":
      apartmentCost = juneAndSeptemberApartmentPrice * days;
      studioCost = juneAndSeptemberStudioPrice * days;
      if (days > 14) {
        studioCost *= 0.8;
      }
      break;
    case "July":
    case "August":
      apartmentCost = julyAndAugustApartmentPrice * days;
      studioCost = julyAndAugustStudioPrice * days;
      break;
  }
  if (days > 14) {
    apartmentCost *= 0.9;
  }
  console.log(`Apartment: ${apartmentCost.toFixed(2)} lv.`);
  console.log(`Studio: ${studioCost.toFixed(2)} lv.`);
}
