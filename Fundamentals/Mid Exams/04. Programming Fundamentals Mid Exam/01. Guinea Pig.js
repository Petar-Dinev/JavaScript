function guineaPig(input) {
  input = input.map(Number);
  let food = input[0] * 1000;
  let hay = input[1] * 1000;
  let cover = input[2] * 1000;
  let pigWeight = input[3] * 1000;

  for (let i = 1; i <= 30; i++) {
    // if (food < 0 || hay < 0 || cover < 0) {
    //   console.log("Merry must go to the pet store!");
    //   break;
    // }
    food -= 300;
    if (i % 2 == 0) {
      hay -= 0.05 * food;
    }
    if (i % 3 == 0) {
      cover -= (1 * pigWeight) / 3;
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
      console.log("Merry must go to the pet store!");
      break;
    }
  }

  if (food > 0 && hay > 0 && cover > 0) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
        2
      )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
    );
  }
}

// guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
// guineaPig(["9", "5", "5.2", "1"]);
