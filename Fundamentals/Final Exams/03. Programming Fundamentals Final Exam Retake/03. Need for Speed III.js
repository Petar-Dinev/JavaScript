function solve(input) {
  let numOfCars = Number(input.shift());
  let cars = {};

  for (let i = 0; i < numOfCars; i++) {
    let [car, mileage, fuel] = input.shift().split("|");
    mileage = Number(mileage);
    fuel = Number(fuel);
    cars[car] = {mileage, fuel };
  }
  while (input[0] != "Stop") {
    let [command, car, arg1, arg2] = input.shift().split(" : ");
    let obj = cars[car];
    if (command == "Drive") {
      let distance = Number(arg1);
      let fuel = Number(arg2);
      if (obj.fuel >= fuel) {
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
        obj.fuel -= fuel;
        obj.mileage += distance;
        if (obj.mileage >= 100000) {
          console.log(`Time to sell the ${car}!`);
          delete cars[car];
        }
      } else {
        console.log("Not enough fuel to make that ride");
      }
    } else if (command == "Refuel") {
      let fuel = Number(arg1);
      let refueledFuel = fuel;
      if (obj.fuel + fuel > 75) {
        refueledFuel = 75 - obj.fuel;
      }
      obj.fuel += refueledFuel;
      console.log(`${car} refueled with ${refueledFuel} liters`);
    } else if (command == "Revert") {
      let mileage = Number(arg1);
      if (obj.mileage - mileage >= 10000) {
        obj.mileage -= mileage;
        console.log(`${car} mileage decreased by ${mileage} kilometers`);
      } else {
        obj.mileage = 10000;
      }
    }
  }
  for (let [car, info] of Object.entries(cars)) {
    console.log(
      `${car} -> Mileage: ${info.mileage} kms, Fuel in the tank: ${info.fuel} lt.`
    );
  }
}

solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
