function squareOfStars(num) {
  let output = "* ".repeat(num);
  for (let i = 0; i < num; i++) {
    console.log(output);
  }
}

squareOfStars(1);
squareOfStars(5);
squareOfStars(7);
