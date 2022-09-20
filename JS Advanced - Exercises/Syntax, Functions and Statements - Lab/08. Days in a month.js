function daysInAMonth(month, year) {
  let date = new Date(year, month);
  date.setDate(date.getDate() - 1);
  console.log(date.getDate());
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);
