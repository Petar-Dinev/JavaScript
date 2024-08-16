class ShadyCarDealership {
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (model == '' || year < 1950 || mileage < 0 || price < 0) {
            throw new Error('Invalid car!');
        }
        this.availableCars.push({ model, year, mileage, price });
        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredYear) {
        const car = this.availableCars.find(c => c.model == model);
        if (!car) {
            return `${model} was not found!`
        }
        if (desiredYear - car.year <= 5 && desiredYear - car.year >= 0) {
            car.price *= 0.9;
        } else if (desiredYear - car.year > 5) {
            car.price *= 0.8;
        }
        this.availableCars.splice(this.availableCars.indexOf(car), 1)
        this.revenue += car.price;
        this.soldCars.push({ model: car.model, year: car.year, mileage: car.mileage, soldPrice: car.price })
        return `${car.model} (${car.year}) was sold for ${car.price.toFixed(2)}$`
    }

    prepareCarForSale(model) {
        const car = this.availableCars.find(c => c.model == model);

        if (!car) {
            return `${model} was not found for preparation!`;
        }

        car.price *= 1.3;
        car.mileage *= 0.5;

        return `${car.model} (${car.year}) is prepared for sale with ${car.mileage} km. - ${car.price.toFixed(2)}$`
    }

    salesJournal(criteria) {
        if (criteria != 'year' && criteria != 'model') {
            throw new Error('Invalid criteria!')
        }
        if (criteria == 'year') {
            this.soldCars.sort((a, b) => b.year - a.year)
        } else {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        }

        const result = [`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$
${this.soldCars.length} cars sold:`
        ]
        for (const car of this.soldCars) {
            result.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`)
        }

        return result.join('\n')
    }
}