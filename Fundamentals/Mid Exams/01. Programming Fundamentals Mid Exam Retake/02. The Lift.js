function theLift(input) {
  let people = Number(input[0]);
  let liftWagons = input[1].split(" ");
  let maxPeopleInWagon = 4;
  let haveSpots = false;

  for (let i = 0; i < liftWagons.length; i++) {
    let currentPeopleInWagon = Number(liftWagons[i]);
    if (currentPeopleInWagon < maxPeopleInWagon) {
      if (people >= maxPeopleInWagon - currentPeopleInWagon) {
        people -= maxPeopleInWagon - currentPeopleInWagon;
        liftWagons[i] = maxPeopleInWagon;
      } else {
        liftWagons[i] = Number(liftWagons[i]) + people;
        people = 0;
        console.log("The lift has empty spots!");
        haveSpots = true;
        break;
      }
    }
  }

  if (people) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
  }
  console.log(liftWagons.join(" "));
}

theLift(["15", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);
