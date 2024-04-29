const { expect } = require('chai')
const cinema = require('./cinema')

describe('Cinema tests', function () {
    describe('showMovies method tests', function () {
        it('should return correct value with empty array for param', () => {
            expect(cinema.showMovies([])).to.be.equal("There are currently no movies to show.")
        })
        it('should return correct value with not empty array for param', () => {
            expect(cinema.showMovies(['a', 'b', 'c'])).to.be.equal('a, b, c')
            expect(cinema.showMovies(['a'])).to.be.equal('a')
        })
    })
    describe('ticketPrice method tests', function () {
        it('should throw error with invalid param', () => {
            expect(() => cinema.ticketPrice('a')).to.throw("Invalid projection type.")
            expect(() => cinema.ticketPrice('premiere')).to.throw("Invalid projection type.")
            expect(() => cinema.ticketPrice('normal')).to.throw("Invalid projection type.")
            expect(() => cinema.ticketPrice('discount')).to.throw("Invalid projection type.")
        })
        it('should return correct price with valid param', () => {
            expect(cinema.ticketPrice("Premiere")).to.be.equal(12.00)
            expect(cinema.ticketPrice("Normal")).to.be.equal(7.50)
            expect(cinema.ticketPrice("Discount")).to.be.equal(5.50)
        })
    })
    describe('swapSeatsInHall method tests', function () {
        it('should return correct string with invalid param', () => {
            expect(cinema.swapSeatsInHall(-1, 1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1, -1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(-1, -2)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(-1, 0)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, -1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1, 0)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 0)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 21)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(21, 0)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1, 21)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(21, 1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(21, 22)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall('a', 'b')).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1, 'b')).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall('a', 1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall()).to.be.equal("Unsuccessful change of seats in the hall.")
        })

        it('should return correct price with valid param', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.be.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(2, 1)).to.be.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(20, 1)).to.be.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal('Successful change of seats in the hall.')
        })

    })
})