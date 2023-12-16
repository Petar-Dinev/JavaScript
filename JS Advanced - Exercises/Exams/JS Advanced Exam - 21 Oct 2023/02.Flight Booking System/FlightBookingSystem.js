class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    let flight = this.flights.find((x) => x.flightNumber == flightNumber);
    if (flight) {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    } else {
      this.flights.push({ flightNumber, destination, departureTime, price });
      return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }
  }
  bookFlight(passengerName, flightNumber) {
    let flight = this.flights.find((x) => x.flightNumber == flightNumber);

    if (!flight) {
      return `Flight ${flightNumber} is not available for booking.`;
    } else {
      this.bookings.push({ passengerName, flightNumber });
      this.bookingsCount += 1;
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }
  }
  cancelBooking(passengerName, flightNumber) {
    let passenger = this.bookings.find(
      (x) => x.passengerName == passengerName && x.flightNumber == flightNumber
    );
    if (passenger) {
      this.bookingsCount -= 1;
      this.bookings.slice(
        this.bookings.findIndex((x) => x.passengerName == passengerName),
        1
      );
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    } else {
      throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
    }
  }
  showBookings(criteria) {
    if (this.bookings.length == 0) {
      throw new Error(`No bookings have been made yet.`);
    }

    let result = [];
    let flights = [];

    if (criteria == "all") {
      result.push(`All bookings(${this.bookingsCount}):`);
      flights = this.flights;
    } else if (criteria == "cheap") {
      result.push("Cheap bookings:");
      flights = this.flights.filter((x) => x.price <= 100);
      if (flights.length == 0) {
        return "No cheap bookings found.";
      }
    } else {
      result.push("Expensive bookings:");
      flights = this.flights.filter((x) => x.price > 100);
      if (flights.length == 0) {
        return "No expensive bookings found.";
      }
    }

    for (let flight of flights) {
      this.bookings
        .filter((b) => b.flightNumber == flight.flightNumber)
        .map((b) =>
          result.push(`${b.passengerName} booked for flight ${b.flightNumber}.`)
        );
    }

    return result.join('\n')
  }
}

const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("expensive"));
  console.log(system.showBookings("cheap"));





