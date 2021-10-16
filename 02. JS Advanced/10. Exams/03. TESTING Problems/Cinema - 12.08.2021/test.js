const { expect } = require('chai');
const cinema = require('./cinema');

describe('cinema', () => {
    describe('showMovies', () => {
        it('should return no movies when no input', () => {
           expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('should return correct when corect input', () => {
            expect(cinema.showMovies(['1', '2', '3'])).to.be.equal('1, 2, 3');
        });
    });

    describe('ticketPrice', () => {
        it('should return incorrect when incorrect input', () => {
            expect(() => cinema.ticketPrice("something")).to.throw('Invalid projection type.');
        })
        it('should return correct when corect input', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    });

    describe('swapSeatsInHall', () => {
        it('should return incorrect when only 1 number is passed', () => {
            expect(cinema.swapSeatsInHall(3)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return incorrect when numbers are not integers', () => {
            expect(cinema.swapSeatsInHall('a', 6)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(6, 'a')).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return incorrect when 1 of the numbers is greater than 20', () => {
            expect(cinema.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 5)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return incorrect when numbers are negative', () => {
            expect(cinema.swapSeatsInHall(-3, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('should return corect when input is correct', () => {
            expect(cinema.swapSeatsInHall(3, 20)).to.equal('Successful change of seats in the hall.');
        });
    });
});