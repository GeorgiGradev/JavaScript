const {expect}= require('chai');
const isSymmetric = require('./script');

describe('isSymmetric', () => {
    it('returns true for valid symmetric input', () => {
        expect(isSymmetric([1,1])).to.be.true;
    })

    it('returns false for valid unsymmetric input', () => {
        expect(isSymmetric([1,2])).to.be.false;
    })

    it('returns false for invalid arguments', () => {
        expect(isSymmetric('a')).to.be.false;
    })

    // test overloading
    it('returns true for valid symmetric odd-element array', () => {
        expect(isSymmetric([1,1,1])).to.be.true;
    })

    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a','a'])).to.be.true;
    })

    it('returns false for valid non-symmetric string array', () => {
        expect(isSymmetric(['a','b'])).to.be.false;
    })

    it('returns false for different types of values array',() => {
        expect(isSymmetric(['1',1])).to.be.false;
    })
});