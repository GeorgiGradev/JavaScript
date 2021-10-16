const { expect } = require('chai');
const testNumbers = require('./testNumbers');

describe('textNumbers', () => {
    describe('sumNumbers', () => {
        it('should return undefined if parameters are not numbers', () => {
            expect(testNumbers.sumNumbers('test', 2)).to.equal(undefined);
            expect(testNumbers.sumNumbers(3, 'test')).to.equal(undefined);
            expect(testNumbers.sumNumbers(2)).to.equal(undefined);
            expect(testNumbers.sumNumbers('test')).to.equal(undefined);
            expect(testNumbers.sumNumbers()).to.equal(undefined);
        });
        it('should return correct result if parameters are numbers', () => {
            expect(testNumbers.sumNumbers(2, 4)).to.equal('6.00');
            expect(testNumbers.sumNumbers(2.001, 2.009)).to.equal('4.01');
            expect(testNumbers.sumNumbers(-2.001, 0)).to.equal('-2.00');
        });
    });

    describe('numberChecker', () => {
        it('should throw Error if number is not a number', () => {
            expect(() => testNumbers.numberChecker('test')).to.throw();
            expect(() => testNumbers.numberChecker()).to.throw();
            expect(() => testNumbers.numberChecker(NaN)).to.throw();
        }); 
        it('should return correct result if input is a number', () => {
            expect(testNumbers.numberChecker(3)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(2.3)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker('2.3')).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(0)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker('0')).to.be.equal('The number is even!');
        });
    });

    describe('averageSumArray', () => {
        it('should return correct result', () => {
            expect(testNumbers.averageSumArray([1, 2, 3, 4])).to.be.equal(2.5);
            expect(testNumbers.averageSumArray([1])).to.be.equal(1);
        });
    });
});