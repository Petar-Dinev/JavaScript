class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.avaibleBikes = [];
    }

    addBikes(bikes) {
        let addedBikes = []
        for (let bikeInfo of bikes) {
            let [brand, quantity, price] = bikeInfo.split('-');
            let currentBike = this.avaibleBikes.find(b => b.brand == brand);
            if (currentBike) {
                currentBike.quantity += Number(quantity)
                if (Number(price) > currentBike.price) {
                    currentBike.price = Number(price)
                }
            } else {
                this.avaibleBikes.push({
                    brand,
                    quantity: Number(quantity),
                    price: Number(price)
                })
            }
            if (!addedBikes.includes(brand)) {
                addedBikes.push(brand)
            }
        }
        return `Successfully added ${addedBikes.join(', ')}`
    }

    rentBikes(selectedBikes) {
        let allBikesAreAvailable = true;
        let totalPrice = 0
        for (let bikeInfo of selectedBikes) {
            let [brand, quantity] = bikeInfo.split('-');
            quantity = Number(quantity)
            let currentBike = this.avaibleBikes.find(b => b.brand == brand);
            if (currentBike) {
                if (quantity <= currentBike.quantity) {
                    totalPrice += quantity * currentBike.price;
                    currentBike.quantity -= quantity;
                } else {
                    allBikesAreAvailable = false;
                }
            } else {
                allBikesAreAvailable = false;
            }
        }
        if (allBikesAreAvailable) {
            return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`
        } else {
            return "Some of the bikes are unavailable or low on quantity in the bike rental service."
        }
    }

    returnBikes(returnedBikes) {
        let isAllBikesOurs = true;
        for (let bikeInfo of returnedBikes) {
            let [brand, quantity] = bikeInfo.split('-');
            quantity = Number(quantity)
            let currentBike = this.avaibleBikes.find(b => b.brand == brand);
            if (currentBike) {
                currentBike.quantity += quantity;
            } else {
                isAllBikesOurs = false;
            }
        }
        if (isAllBikesOurs) {
            return "Thank you for returning!"
        } else {
            return "Some of the returned bikes are not from our selection."
        }
    }

    revision() {
        let result = 'Available bikes:'
        let sortedBikes = this.avaibleBikes.sort((a, b) => a.price - b.price)
        for (let bike of sortedBikes) {
            result += `\n${bike.brand} quantity:${bike.quantity} price:$${bike.price}`
        }
        result += `\nThe name of the bike rental service is ${this.name}, and the location is ${this.location}.`
        return result;
    }
}

const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());

