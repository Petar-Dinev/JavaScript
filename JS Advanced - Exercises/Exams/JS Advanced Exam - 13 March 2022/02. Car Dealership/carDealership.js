class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (model == "" || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }
    this.availableCars.push({ model, horsepower, price, mileage });

    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    const car = this.availableCars.find((x) => x.model == model);
    if (!car) {
      throw new Error(`${model} was not found!`);
    }

    let sellPrice;
    if (desiredMileage >= car.mileage) {
      sellPrice = car.price;
    } else if (car.mileage - desiredMileage <= 40000) {
      sellPrice = car.price * 0.95;
    } else {
      sellPrice = car.price * 0.9;
    }
    const index = this.availableCars.findIndex((x) => x.model == model);
    this.availableCars.splice(index, 1);
    this.soldCars.push({
      model: car.model,
      horsepower: car.horsepower,
      price: sellPrice,
    });
    this.totalIncome += sellPrice;
    return `${model} was sold for ${sellPrice.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length > 0) {
      const result = ["-Available cars:"];
      this.availableCars.map((x) => {
        result.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`);});
      return result.join("\n");
    } else {
      return "There are no available cars";
    }
  }

  salesReport(criteria) {
    let sortedSoldCars = [];
    if (criteria == "horsepower") {
      sortedSoldCars = this.soldCars.sort(
        (a, b) => b.horsepower - a.horsepower
      );
    } else if (criteria == "model") {
      sortedSoldCars = this.soldCars.sort((a, b) =>
        a.model.localeCompare(b.model)
      );
    } else {
      throw new Error("Invalid criteria!");
    }
    const result = [
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
      `-${this.soldCars.length} cars sold:`,
    ];
    sortedSoldCars.map((x) =>
      result.push(`---${x.model} - ${x.horsepower} HP - ${x.price.toFixed(2)}$`)
    );

    return result.join("\n");
  }
}

let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));
