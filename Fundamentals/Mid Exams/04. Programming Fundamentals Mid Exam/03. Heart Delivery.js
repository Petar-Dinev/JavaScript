function heartDelivery(input) {
  let neighborhood = input.shift().split("@").map(Number);
  let currentLine = input.shift();
  let housesWithValentinesDay = 0;
  let cupidIndex = 0;
  while (currentLine != "Love!") {
    let [command, length] = currentLine.split(" ");
    length = Number(length);
    if (cupidIndex + length < neighborhood.length) {
      cupidIndex += length;
    } else {
      cupidIndex = 0;
    }

    if (neighborhood[cupidIndex] > 0) {
      neighborhood[cupidIndex] -= 2;
      if (neighborhood[cupidIndex] == 0) {
        console.log(`Place ${cupidIndex} has Valentine's day.`);
        housesWithValentinesDay++;
      }
    } else {
      console.log(`Place ${cupidIndex} already had Valentine's day.`);
    }

    currentLine = input.shift();
  }

  console.log(`Cupid's last position was ${cupidIndex}.`);
  if (housesWithValentinesDay == neighborhood.length) {
    console.log("Mission was successful.");
  } else {
    console.log(
      `Cupid has failed ${
        neighborhood.length - housesWithValentinesDay
      } places.`
    );
  }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);

heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
