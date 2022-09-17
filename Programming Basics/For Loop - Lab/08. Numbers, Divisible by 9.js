function numbersDivisibleBy9(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let sum = 0
    let res = ""

    for (let i = firstNumber; i < secondNumber; i++) {
       if ( i % 9 == 0) {
           sum += i
           res += `${i}\n`
       }
    }
    console.log(`The sum: ${sum}`)
    console.log(res)
}
numbersDivisibleBy9(["100", "200"])