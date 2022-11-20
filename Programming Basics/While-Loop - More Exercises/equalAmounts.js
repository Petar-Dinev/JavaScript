function equalAmounts(input) {
    let start =Number(input[0]);
    let end =Number(input[1]);
    let printLine = ""
    
    for(let k = start; k <= end; k++) {
        let currectNum = "" + k
        let sumEven = 0
        let sumOdd = 0
        for(i = 0; i <= currectNum.length; i++) {
            let num = Number(currectNum.charAt(i))
            if (i % 2 === 0){
                sumEven += num
            } else {
                sumOdd += num
            }
        }
       if(sumEven === sumOdd){
           printLine += k + " "
       }
    }
    console.log(printLine)

}
equalAmounts(["100000", "100050"])