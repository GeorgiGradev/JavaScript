const { expect } = require('chai');
const library = require('./library');

describe('library', () => {
    describe('calcPriceOfBook', () => {
        it('invalid input should throw', () => {
           expect(() => library.calcPriceOfBook(1, 1990)).to.throw("Invalid input");
           expect(() => library.calcPriceOfBook(1990)).to.throw("Invalid input");
           expect(() => library.calcPriceOfBook({}, 1990)).to.throw("Invalid input");
           expect(() => library.calcPriceOfBook('test', 'year')).to.throw("Invalid input");
           expect(() => library.calcPriceOfBook()).to.throw("Invalid input");
           expect(() => library.calcPriceOfBook('test')).to.throw("Invalid input");
        });
       it ('should return discount if year < 1990', () => {
        expect(library.calcPriceOfBook('Title', 1980)).to.equal('Price of Title is 10.00');
        expect(library.calcPriceOfBook('Title', 1979)).to.equal('Price of Title is 10.00');
        expect(library.calcPriceOfBook('Title', 1960)).to.equal('Price of Title is 10.00');
       });
       it('should return standart price when year greater than 1980', () => {
        expect(library.calcPriceOfBook('Title', 1981)).to.equal('Price of Title is 20.00');
        expect(library.calcPriceOfBook('Title', 1990)).to.equal('Price of Title is 20.00');
       });
    });

    describe('findBook ', () => {
        it('should trhow error if no books', () => {
            expect(() => library.findBook([], 'Title')).to.throw("No books currently available");
        });
        it('should give corect result when book found', () => {
            expect(library.findBook(['Title', 'Some book'], 'Title')).to.equal("We found the book you want.");
            expect(library.findBook(['Title'], 'Title')).to.equal("We found the book you want.");
        });
        it('should give corect result when NO book found', () => {
            expect(library.findBook(['Title', 'Some book'], 'Test')).to.equal("The book you are looking for is not here!");
            expect(library.findBook(['Title'], 'Some book')).to.equal("The book you are looking for is not here!");
        });
    });

    describe('arrangeTheBooks ', () => {
        it('should throw error if invalid input', () => {
            expect(() => library.arrangeTheBooks('test')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-10)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks()).to.throw('Invalid input');
        });
        it('should return GREAT JOB when correct input', () => {
            expect(library.arrangeTheBooks(30)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it('should return Insufficient space when books are more', ()=> {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
            expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.");
        })
    });
});