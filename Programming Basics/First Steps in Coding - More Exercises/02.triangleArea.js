function triangleArea(input) {
    let a = Number(input[0]);
    let h = Number(input[1]);
    let areaOfTriangle = (a * h /2).toFixed(2)
    console.log(areaOfTriangle);
}

triangleArea(["20", "30"])