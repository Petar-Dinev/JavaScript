function carFactory(object) {
  let { model, power, color, carriage, wheelsize } = object;

  let result = {
    model,
  };

  if (power < 120) {
    result.power = {
      power: 90,
      volume: 1800,
    };
  } else if (power < 200) {
    result.power = {
      power: 120,
      volume: 2400,
    };
  } else {
    result.power = {
      power: 200,
      volume: 3500,
    };
  }

  result.carriage = {
    type: carriage,
    color,
  };

  if (wheelsize % 2 == 0) {
    result.wheels = new Array(4).fill(wheelsize - 1);
  } else {
    result.wheels = new Array(4).fill(wheelsize);
  }

  return result;
}

console.log(carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
}));
