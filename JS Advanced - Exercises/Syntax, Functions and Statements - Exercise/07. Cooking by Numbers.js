function cookingByNumber(num, ...rest) {
  num = Number(num);
  let actions = {
    chop: (x) => (x /= 2),
    dice: (x) => (x = Math.sqrt(x)),
    spice: (x) => (x = x + 1),
    bake: (x) => x * 3,
    fillet: (x) => (x *= 0.8),
  };

  for (let command of rest) {
    num = actions[command](num);
    console.log(num);
  }
}

cookingByNumber("32", "chop", "chop", "chop", "chop", "chop");
console.log("----------");
cookingByNumber("9", "dice", "spice", "chop", "bake", "fillet");
