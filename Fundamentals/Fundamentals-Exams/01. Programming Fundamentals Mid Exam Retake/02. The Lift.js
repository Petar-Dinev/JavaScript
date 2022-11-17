function theLift(input) {
  let waitingPeople = Number(input[0]);
  let wagons = input[1].split(" ");
  let peopleInLift = 0;
  let fullLIft = wagons.length * 4;

  for (let i = 0; i < wagons.length; i++) {
    let freeSpots = 4 - Number(wagons[i]);
    if (waitingPeople >= freeSpots) {
      wagons[i] = freeSpots + Number(wagons[i]);
      waitingPeople -= freeSpots;
      peopleInLift += wagons[i];
    } else {
      wagons[i] = waitingPeople + Number(wagons[i]);
      waitingPeople -= waitingPeople;
      peopleInLift += wagons[i];
      break;
    }
  }

  let leftSpots = fullLIft - peopleInLift;

  if (waitingPeople == 0) {
    if (leftSpots > 0) {
      console.log("The lift has empty spots!");
      console.log(`${wagons.join(" ")}`);
    } else {
      console.log(`${wagons.join(" ")}`);
    }
  }
  if (leftSpots == 0) {
    console.log(
      `There isn't enough space! ${waitingPeople} people in a queue!`
    );
    console.log(`${wagons.join(" ")}`);
  }
}

theLift(["15", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);
