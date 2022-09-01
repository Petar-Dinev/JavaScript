function suppliesForSchool(input) {
    const pensPack = 5.8;
    const markersPack = 7.2;
    const detergentPerLitres = 1.2;
    let numPensPacks = Number(input[0]);
    let numMarkersPacks = Number(input[1]);
    let littresDetergent = Number(input[2]);
    let discount = Number(input[3]);
    let totalCost = numPensPacks * pensPack + numMarkersPacks * markersPack + littresDetergent * detergentPerLitres;
    let discountSum = totalCost * (discount / 100);
    let totalAfterDiscount = totalCost - discountSum; 
    console.log(totalAfterDiscount);
}
suppliesForSchool(["4 ","2 ","5 ","13 "])