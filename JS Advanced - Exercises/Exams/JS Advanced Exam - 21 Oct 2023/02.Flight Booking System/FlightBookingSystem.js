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
      this.bookings.push({passengerName, flightNumber});
      this.bookingsCount += 1;
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }
  }
  cancelBooking (passengerName, flightNumber) {
    let passenger = this.bookings.find(x => (x.passengerName == passengerName && x.flightNumber == flightNumber))
    if(passenger) {
        this.bookingsCount -= 1;
        this.bookings.slice(this.bookings.findIndex(x => x.passengerName == passengerName) , 1)
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
    } else {
        return `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
    }
  }
  showBookings (criteria) {
    if(this.bookings.length == 0) {
        throw new Error(`No bookings have been made yet.`)
    }

    let result = [];
    let flights = [];

    if(criteria == 'all') {
        result.push(`All bookings(${this.bookingsCount}):`)
        flights = this.bookings
    } else if(criteria == 'cheap') {
    
    } else {

    }
  }
}
