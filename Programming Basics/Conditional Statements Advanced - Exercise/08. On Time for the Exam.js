function onTimeForTheExam(input) {
  const hourOfExam = Number(input[0]);
  const minsOfExam = Number(input[1]);
  const hourOfArrival = Number(input[2]);
  const minsOfArrival = Number(input[3]);

  const examTotalMins = hourOfExam * 60 + minsOfExam;
  const arrivalTotalMins = hourOfArrival * 60 + minsOfArrival;

  let diff = Math.abs(examTotalMins - arrivalTotalMins);
  let hour = Math.floor(diff / 60);
  let mins = diff % 60;

  if (mins == 0 || (mins < 10 && hour > 0)) {
    mins = `0${mins}`;
  }
  if (examTotalMins === arrivalTotalMins) {
    console.log("On time");
  } else if (arrivalTotalMins > examTotalMins && hour > 0) {
    console.log("Late");
    console.log(`${hour}:${mins} hours after the start`);
  } else if (arrivalTotalMins > examTotalMins) {
    console.log("Late");
    console.log(`${mins} minutes after the start`);
  } else if (examTotalMins > arrivalTotalMins && hour > 0) {
    console.log("Early");
    console.log(`${hour}:${mins} hours before the start`);
  } else if (examTotalMins > arrivalTotalMins && mins > 30) {
    console.log("Early");
    console.log(`${mins} minutes before the start`);
  } else {
    console.log("On time");
    console.log(`${mins} minutes before the start`);
  }
}
