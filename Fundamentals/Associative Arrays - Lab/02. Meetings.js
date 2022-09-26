function meetings(arr) {
  let meeting = {};

  for (let data of arr) {
    let [weekDay, name] = data.split(" ");
    if (meeting[weekDay] == undefined) {
      meeting[weekDay] = name;
      console.log(`Scheduled for ${weekDay}`);
    } else {
      console.log(`Conflict on ${weekDay}!`);
    }
  }

  for (let key of Object.keys(meeting)) {
    console.log(`${key} -> ${meeting[key]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
