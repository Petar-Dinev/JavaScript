 function worldSwimmingRecord(input) {
    const secondsWR = Number(input[0]);
    const meters = Number(input[1]);
    const secondsForOneMeter = Number(input[2]);
    
    let secondsMore = 0

    const secondsAdded = Math.floor(meters / 15) * 12.5;
    const totalTime = meters * secondsForOneMeter + secondsAdded;

   if (totalTime >= secondsWR) {
        secondsMore = (totalTime - secondsWR).toFixed(2);
        console.log(`No, he failed! He was ${secondsMore} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord(["10464","1500","20"])
