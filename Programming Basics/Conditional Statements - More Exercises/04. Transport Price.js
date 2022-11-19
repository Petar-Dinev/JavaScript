function transportPrice(input) {
    // •	Такси. Начална такса: 0.70 лв. Дневна тарифа: 0.79 лв. / км. Нощна тарифа: 0.90 лв. / км.
    // •	Автобус. Дневна / нощна тарифа: 0.09 лв. / км. Може да се използва за разстояния минимум 20 км.
    // •	Влак. Дневна / нощна тарифа: 0.06 лв. / км. Може да се използва за разстояния минимум 100 км.
    let kmForTravel = Number(input[0]);
    let partOfDayToTravel = input[1];
    let taxiStartTax = 0.7;
    let dayTaxiRate = 0.79;
    let nightTaxiRate = 0.9;
    let busRate = 0.09;
    let trainRate = 0.06;

    let totalPrice = 0;
    if(kmForTravel >= 100) {
        totalPrice = kmForTravel * trainRate;
    } else if(kmForTravel >= 20) {
       totalPrice = kmForTravel * busRate;
    } else {
        if(partOfDayToTravel === "day") {
            totalPrice = taxiStartTax + dayTaxiRate * kmForTravel;
        } else if(partOfDayToTravel === "night") {
            totalPrice = taxiStartTax + nightTaxiRate * kmForTravel;
        }
    }  
    console.log(totalPrice.toFixed(2));
}

transportPrice(["5", "day"])