function rounding(num, precision) {
    if (precision > 15) {
        precision = 15
    }

    console.log(parseFloat(num.toFixed(precision)));
}

rounding(15.4312523523, 3)