function circleArea(param) {
  let paramType = typeof param;
  let area = 0;
  if (paramType === "number") {
    area = param * param * Math.PI;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${paramType}.`
    );
  }
}

circleArea(5);
circleArea("name");
