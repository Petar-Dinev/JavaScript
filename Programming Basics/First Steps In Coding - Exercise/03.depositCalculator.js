function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let dpositTime = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let interestForMoth = (depositSum * (annualInterestRate / 100)) / 12;
    let total = depositSum + dpositTime * interestForMoth;
    console.log(total);
} 
depositCalculator(["200 ","3 ","5.7 "])
