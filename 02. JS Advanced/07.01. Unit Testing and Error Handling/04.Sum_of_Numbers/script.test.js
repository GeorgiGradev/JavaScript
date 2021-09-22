const {expect} = require('chai');
const sum = require('./script');

describe('Sum numbers',  () => {
    it('sums single number',  () => {
        expect(sum([1])).to.equal(1);
    });
    it('sums multiple numbers', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    })
    it('throw NaN if empty array', () => {
        expect(sum(['dfsf'])).to.be.NaN;
    })
});
