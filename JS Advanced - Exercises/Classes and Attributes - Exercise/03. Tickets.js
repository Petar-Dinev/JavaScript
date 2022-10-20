function tickets(arr, criteria) {
  class Ticket {
    constructor(destinationName, price, status) {
      this.destination = destinationName;
      this.price = price;
      this.status = status;
    }
  }

  let tickets = [];

  for (let line of arr) {
    let [destinationName, price, status] = line.split("|");
    price = Number(price);
    tickets.push(new Ticket(destinationName, price, status));
  }
  if (criteria == "destination") {
    tickets.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (criteria === "status") {
    tickets.sort((a, b) => a.status.localeCompare(b.status));
  } else {
    tickets.sort((a, b) => a.price - b.price);
  }
  return tickets;
}
