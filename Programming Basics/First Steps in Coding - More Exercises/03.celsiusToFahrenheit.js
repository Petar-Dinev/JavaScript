function celsiusToFahrenheit(input) {
    let celsium = Number(input[0]);
    let fahrenheit = (celsium * 9 / 5) + 32;
    console.log(fahrenheit.toFixed(2));
}

celsiusToFahrenheit(["25"])