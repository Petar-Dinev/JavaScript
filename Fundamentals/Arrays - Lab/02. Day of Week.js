function dayOfWeek(num) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (num >= 1 && num <= 7) {
    console.log(days[num - 1]);
  } else {
    console.log("Invalid day!");
  }
}

dayOfWeek(1);
dayOfWeek(3);
dayOfWeek(8);
