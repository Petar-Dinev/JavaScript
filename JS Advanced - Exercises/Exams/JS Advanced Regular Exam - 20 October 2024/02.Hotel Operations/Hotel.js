class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.suplyStock = {};
    }

    restockSupplies(supplies) {
        let result = [];

        for (let supplyData of supplies) {
            let [supplyName, supplyQuantity, supplyTotalPrice] = supplyData.split(' ');
            supplyQuantity = Number(supplyQuantity);
            supplyTotalPrice = Number(supplyTotalPrice)

            if (supplyTotalPrice <= this.initialBudget) {
                this.initialBudget -= Number(supplyTotalPrice);
                if (this.suplyStock[supplyName] == undefined) {
                    this.suplyStock[supplyName] = 0;
                }
                this.suplyStock[supplyName] += supplyQuantity;
                result.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else {
                result.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
                break;
            }
        }

        return result.join('\n')
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (Object.keys(this.roomAvailability).includes(roomType)) {
            return `The ${roomType} is already available in our hotel, try something different.`
        }

        this.roomAvailability[roomType] = {
            neededSupplies: {}
        }

        const room = this.roomAvailability[roomType]

        for (let element of neededSupplies) {
            const [supplyName, supplyQuantity] = element.split(' ');
            room.neededSupplies[supplyName] = Number(supplyQuantity)
        }

        room.pricePerNight = Number(pricePerNight)

        return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`

    }

    showAvailableRooms() {

        if (Object.keys(this.roomAvailability).length == 0) {
            return "Our rooms are not ready yet, please come back later..."
        }

        return Object.entries(this.roomAvailability).map(([roomType, roomData]) => `${roomType} - $ ${roomData.pricePerNight}`).join('\n')
    }

    bookRoom(roomType) {
        if (this.roomAvailability[roomType] == undefined) {
            return `There is no ${roomType} available, would you like to book another room?`
        }

        let isRoomReady = true;

        for (let [supply, quantity] of Object.entries(this.roomAvailability[roomType].neededSupplies)) {

            if (this.suplyStock[supply] == undefined || this.suplyStock[supply] < quantity) {
                isRoomReady = false
                break;
            }

        }

        if (isRoomReady) {
            return `Your booking for ${roomType} has been confirmed! The price is $${this.roomAvailability[roomType].pricePerNight} per night.`
        } else {
            return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`
        }
    }
}

let hotel = new Hotel(200);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
