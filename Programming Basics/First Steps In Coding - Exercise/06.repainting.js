function repainting(input) {
    let naylonPrice = 1.5;
    let pricePaintForLitter = 14.5;
    let pricePaintThinner = 5.0;
    let extraPaint = 0.1;
    let extraNaylon = 2;
    let pouches = 0.4;
    const naylonNeeded = Number(input[0]);
    const paintNeeded = Number(input[1]);
    const thinnerNeeded = Number(input[2]);
    const workHours = Number(input[3]);

    let costForNaylon = (naylonNeeded + extraNaylon) * naylonPrice;
    let costForPaint = (paintNeeded + (paintNeeded * extraPaint)) * pricePaintForLitter;
    let costForThinner = thinnerNeeded * pricePaintThinner;
    let totalCostForStuff = costForNaylon + costForPaint + costForThinner + pouches;
    let costForWorkForHour = (totalCostForStuff * 30) / 100;
    let totalCostForWorkNeed = costForWorkForHour * workHours;
    let totalCost = totalCostForStuff + totalCostForWorkNeed;

    console.log(totalCost);

}

repainting(["10 ","11 ","4 ","8 "])
