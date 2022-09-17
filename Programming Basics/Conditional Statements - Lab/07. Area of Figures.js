function areaOfFigures(input) {
  let areaOfFigures = 0;
  let figures = input[0];

  switch (figures) {
    case "square":
      let side = Number(input[1]);
      areaOfFigures = side * side;
      break;
    case "rectangle":
      let sideA = Number(input[1]);
      let sideB = Number(input[2]);
      areaOfFigures = sideA * sideB;
      break;
    case "circle":
      let r = Number(input[1]);
      areaOfFigures = Math.PI * r * r;
      break;
    case "triangle":
      let a = Number(input[1]);
      let h = Number(input[2]);
      areaOfFigures = (a * h) / 2;
      break;
  }
  console.log(areaOfFigures.toFixed(3));
}
areaOfFigures(["circle", "6"]);
