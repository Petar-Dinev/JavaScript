function triangleOfNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let print = "";
    for (let k = 1; k <= i; k++) {
      print += `${i} `;
    }
    console.log(print);
  }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
