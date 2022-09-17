function circleAreaAndPerimeter(input) {
    const r = Number(input[0]);
    let areaOfCircle = (r * r) * Math.PI;
    let perimeterOfCircle = (r + r) * Math.PI;
    console.log(areaOfCircle.toFixed(2));
    console.log(perimeterOfCircle.toFixed(2));
}

circleAreaAndPerimeter(["3"])