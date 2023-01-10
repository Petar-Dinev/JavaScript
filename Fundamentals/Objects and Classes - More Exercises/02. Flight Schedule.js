function flightSchedule(input) {
  let flights = input[0];
  let changedFlights = input[1];
  let status = input[2][0];

  let result = [];

  for (let flight of flights) {
    let tokens = flight.split(" ");
    result.push({
      num: tokens[0],
      city: tokens[1],
      status: "Ready to fly",
    });
  }

  for (let changedFlight of changedFlights) {
    let tokens = changedFlight.split(" ");
    for (let el of result) {
      if (el.num == tokens[0]) {
        el.status = tokens[1];
      }
    }
  }

  let res = result.filter((x) => x.status == status);

  for (let el of res) {
    console.log(`{ Destination: '${el.city}', Status: '${el.status}' }`);
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
