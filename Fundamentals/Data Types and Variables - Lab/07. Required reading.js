function requiredReading(totalPages, pagesForHour, days) {
  let needHours = totalPages / pagesForHour;
  let hoursPerDay = needHours / days;
  console.log(hoursPerDay);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
