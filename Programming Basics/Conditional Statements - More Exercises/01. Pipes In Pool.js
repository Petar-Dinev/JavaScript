function pipesInPool(input) {

    let volumeOfPool = Number(input[0]);
    let flowRateOfFirstPipe = Number(input[1]);
    let flowRateOfSecondPipe = Number(input[2]);
    let timeOfPipeWorking = Number(input[3]);

    let firstPipeLitresWater = flowRateOfFirstPipe * timeOfPipeWorking;
    let secondPipeLitresWater = flowRateOfSecondPipe * timeOfPipeWorking;
    let totalWater = firstPipeLitresWater + secondPipeLitresWater;

    let percentPoolFiledFromFirstPipe = (firstPipeLitresWater * 100 / totalWater).toFixed(2);
    let percentPoolFiledFromSecondPipe = (secondPipeLitresWater * 100 / totalWater).toFixed(2);
    let percentPoolFiled = totalWater * 100 / volumeOfPool;

    if(totalWater <= volumeOfPool) {
        console.log(`The pool is ${percentPoolFiled}% full. Pipe 1: ${percentPoolFiledFromFirstPipe}%. Pipe 2: ${percentPoolFiledFromSecondPipe}%.`);
    } else {
        console.log(`For ${timeOfPipeWorking} hours the pool overflows with ${totalWater - volumeOfPool} liters.`);
    }
    
}
pipesInPool(["1000", "100", "120", "3"])