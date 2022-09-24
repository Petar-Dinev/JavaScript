function validityChecker(x1, y1, x2, y2) {
    let result = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    let result2 = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2));
    let result3 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    result = Number.isInteger(result) ? "valid" : "invalid";
    result2 = Number.isInteger(result2) ? "valid" : "invalid";
    result3 = Number.isInteger(result3) ? "valid" : "invalid";

    
    console.log(`{${x1}, ${y1}} to {0, 0} is ${result}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${result2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result3}`);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);