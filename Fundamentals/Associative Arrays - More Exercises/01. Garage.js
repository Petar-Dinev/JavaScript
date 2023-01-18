function garage(input) {
  let map = new Map();

  for (let line of input) {
    let [numOfGarage, carInfo] = line.split(" - ");

    if (!map.has(numOfGarage)) {
      map.set(numOfGarage, []);
    }
    map.get(numOfGarage).push(carInfo);
  }

  for (let [num, arr] of map.entries()) {
    console.log(`Garage № ${num}`);

    for (let el of arr) {
      let garage = "--- ";
      let [...infoOfCar] = el.split(", ");
      for (let info of infoOfCar) {
        let [key, value] = info.split(": ");
        garage += `${key} - ${value}, `;
      }
      console.log(garage.substring(0, garage.length - 2));
    }
  }
}

garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
// garage(['1 - color: green, fuel type: petrol',
// '1 - color: dark red, manufacture: WV',
// '2 - fuel type: diesel',
// '3 - color: dark blue, fuel type: petrol']
// )
