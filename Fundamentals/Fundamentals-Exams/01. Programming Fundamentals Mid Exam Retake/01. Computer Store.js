function computerStore(input) {
  let index = 0;
  let command = input[index];
  index++;
  let priceWithoutTaxes = 0;

  while (command !== "special" && command !== "regular") {
    command = Number(command);
    if (command < 0) {
      console.log("Invalid price!");
    } else {
      priceWithoutTaxes += command;
    }
    command = input[index];
    index++;
  }
  let totalTaxes = priceWithoutTaxes * 0.2;
  let totalPriceWithTaxes = priceWithoutTaxes + totalTaxes;
  if (totalPriceWithTaxes == 0) {
    console.log("Invalid order!");
  } else {
    if (command == "special") {
      totalPriceWithTaxes *= 0.9;
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${totalTaxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
  }
}

computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
