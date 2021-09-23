let {expect} = require('chai');
let isOddOrEven =  require('./script');

describe('evenOrOdd', () => {
    it('should return undefined if input is a number', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined);
    });
    it('should return undefined if input is an array', () => {
        expect(isOddOrEven([2])).to.equal(undefined);
    });
    it('should return undefined if no input', () => {
        expect(isOddOrEven(['a', 'b'])).to.equal(undefined);
    });
    it('should return even if length is even', () => {
        expect(isOddOrEven('test')).to.equal('even');
    });
    it('should return odd if length is odd', () => {
        expect(isOddOrEven('test1')).to.equal('odd');
    });
});