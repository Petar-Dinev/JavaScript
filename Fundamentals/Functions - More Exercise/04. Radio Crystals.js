function radioCrystal(input) {
  let desiredThickness = input.shift();

  function cutting(finalThickness, chunk) {
    console.log(`Processing chunk ${chunk} microns`);
    let cuts = 0;
    while (chunk / 4 >= finalThickness) {
      cuts++;
      chunk /= 4;
    }
    if (cuts) {
      console.log(`Cut x${cuts}`);
      return transportAndWashing(chunk);
    }
    return chunk;
  }

  function transportAndWashing(chunk) {
    console.log(`Transporting and washing`);
    return Math.floor(chunk);
  }

  function lap(finalThickness, chunk) {
    let laps = 0;

    while (chunk * 0.8 >= finalThickness) {
      laps++;
      chunk *= 0.8;
    }
    if (laps) {
      console.log(`Lap x${laps}`);
      return transportAndWashing(chunk);
    }
    return chunk;
  }

  function grind(finalThickness, chunk) {
    let grinds = 0;
    while (chunk - 20 >= finalThickness) {
      grinds++;
      chunk -= 20;
    }
    if (grinds) {
      console.log(`Grind x${grinds}`);
      return transportAndWashing(chunk);
    }
    return chunk;
  }

  function etch(finalThickness, chunk) {
    let etchs = 0;
    while (chunk > finalThickness) {
      etchs++;
      chunk -= 2;
    }
    if (etchs) {
      console.log(`Etch x${etchs}`);
      return transportAndWashing(chunk);
    }
    return chunk;
  }

  function xRay(finalThickness, chunk) {
    if (chunk < finalThickness) {
      console.log("X-ray x1");
      chunk += 1;
    }
    console.log(`Finished crystal ${finalThickness} microns`);
    return chunk;
  }

  for (let i = 0; i < input.length; i++) {
    let chunk = input[i];

    chunk = cutting(desiredThickness, chunk);
    chunk = lap(desiredThickness, chunk);
    chunk = grind(desiredThickness, chunk);
    chunk = etch(desiredThickness, chunk);
    xRay(desiredThickness, chunk);
  }
}

// radioCrystal([1375, 50000])
radioCrystal([1000, 3000, 8100]);
