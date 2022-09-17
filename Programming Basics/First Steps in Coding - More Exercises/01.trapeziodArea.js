function trapezoidalFace(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let trapezFace = (a + b) * h / 2;
    console.log(trapezFace.toFixed(2));
}

trapezoidalFace(["8", "13", "7"])