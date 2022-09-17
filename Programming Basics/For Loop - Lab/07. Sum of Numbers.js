function sumOfNumbers(input) {
    let text = input[0];
    sum = 0
    
    for (let i = 0; i < text.length; i++) {
        let number = Number(text[i]);
        sum += number
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["12345"])