function fishland(input) {
    let mackerelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let palamudKilograms = Number(input[2]);
    let safridKilograms = Number(input[3]);
    let musselsKilograms = Number(input[4]);
    let musselsPrice = 7.50;
    let palamudPrice = mackerelPrice + (mackerelPrice * 60) /100;
    let safridPrice = spratPrice + (spratPrice * 80) / 100;
    let totalCost = palamudKilograms * palamudPrice + safridKilograms * safridPrice + musselsKilograms * musselsPrice;
    console.log(totalCost.toFixed(2))
}

fishland(["5.55", "3.57", "4.3", "3.6", "7"])