function vacationBookList(input) {
    let numPagesLeft = Number(input[0]);
    let pagesReadForHour = Number(input[1]);
    let numDaysNeeded = Number(input[2]);
    let hoursNeeded = numPagesLeft / pagesReadForHour;
    let hoursForDay = hoursNeeded / numDaysNeeded;
    console.log(hoursForDay);
}
vacationBookList(["212 ", "20 ", "2 "])