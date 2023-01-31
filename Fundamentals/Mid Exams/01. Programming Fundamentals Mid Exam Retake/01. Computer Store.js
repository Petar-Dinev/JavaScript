function computerStore(input) {
  let totalPriceWithoutTaxes = 0;
  let totalPriceWithTaxes = 0;

  while (input[0] != "regular" && input[0] != "special") {
    let currentItemCost = Number(input.shift());
    if (currentItemCost < 0) {
      console.log("Invalid price!");
    } else {
      totalPriceWithoutTaxes += currentItemCost;
    }
  }

  let taxes = totalPriceWithoutTaxes * 0.2;
  totalPriceWithTaxes += totalPriceWithoutTaxes + taxes;

  if (input[0] == "special") {
    totalPriceWithTaxes *= 0.9;
  }

  if (totalPriceWithTaxes > 0) {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
  } else {
    console.log("Invalid order!");
  }
}

computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
computerStore(["regular"]);
