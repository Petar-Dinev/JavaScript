function yardGreening(input) {
    let price = 7.61;
    let yards = Number(input[0]);
    let discount = (yards * price) * 0.18
    let total = yards * price;
    let totalPrice = total - discount;

    console.log(`The final price is: ${totalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"])