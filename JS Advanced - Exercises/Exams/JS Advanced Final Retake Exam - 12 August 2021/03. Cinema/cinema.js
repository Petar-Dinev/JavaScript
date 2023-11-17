const cinema = {
    showMovies: function(movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function(projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function(firstPlace, secondPlace) {

        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

module.exports = cinema;


console.log(cinema.swapSeatsInHall(-2, -1));
console.log(cinema.swapSeatsInHall(2, -1));
console.log(cinema.swapSeatsInHall(-2, 1));
console.log(cinema.swapSeatsInHall(0, 1));
console.log(cinema.swapSeatsInHall(2, 0));
console.log(cinema.swapSeatsInHall(-9, 0));
console.log(cinema.swapSeatsInHall(1, -9,));
console.log(cinema.swapSeatsInHall(2, 1));
console.log(cinema.swapSeatsInHall(1, 1));
console.log(cinema.swapSeatsInHall(1, 2));
console.log(cinema.swapSeatsInHall(1, 20));
console.log(cinema.swapSeatsInHall(20, 1));
console.log(cinema.swapSeatsInHall(21, 1));
console.log(cinema.swapSeatsInHall(1, 21));
console.log(cinema.swapSeatsInHall(19, 20));
console.log(cinema.swapSeatsInHall(1, "2"));
console.log(cinema.swapSeatsInHall("1", 2));
console.log(cinema.swapSeatsInHall("1", "2"));
console.log(cinema.swapSeatsInHall("a", "b"));
