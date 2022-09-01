function basketballEquipment(input) {
    const yearTax = Number(input[0]);
    const priceOfTrainers = yearTax - 0.4 * yearTax;
    const priceOfSuit = priceOfTrainers - 0.2 * priceOfTrainers;
    const priceOfBall = priceOfSuit / 4;
    const priceOfAcc = priceOfBall / 5;
    const totalPrice = yearTax + priceOfTrainers + priceOfSuit + priceOfBall + priceOfAcc;
    
    console.log(totalPrice);
}

basketballEquipment(["365"])