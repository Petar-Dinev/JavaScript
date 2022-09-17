function weatherForecast(input) {
    const weather = input[0];
    if (weather == "sunny") {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }
}

weatherForecast(["snowy"])