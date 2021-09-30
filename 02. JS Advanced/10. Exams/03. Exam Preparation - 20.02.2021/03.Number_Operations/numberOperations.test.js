const {expect} = require(`chai`);
const numberOperations = require(`./numberOperations`);

describe('numberOperations', () => {
    describe('powNumber', () => {
        it('returns correct result', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(4)).to.equal(16);
            expect(numberOperations.powNumber(-4)).to.equal(16);
        });
    });

    describe('numberChecker', () => {
        it('throws an error if input is not a number', () =>{
            expect(() => numberOperations.numberChecker('string')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
        });
        it('returns correct result for number less than 100', () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        });
        it('returns correct result for number bigger or equal 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        });
    });

    describe('sumArrays', () => {
        it('returns correct result', () => {
            expect(numberOperations.sumArrays([1,2,3], [1, 2, 3])).deep.to.equal([2,4,6]);
            expect(numberOperations.sumArrays([1,2,3], [1, 2, 3, 4])).deep.to.equal([2,4,6,4]);
        });
    });
});