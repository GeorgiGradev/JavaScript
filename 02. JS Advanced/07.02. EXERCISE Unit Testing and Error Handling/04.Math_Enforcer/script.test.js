const { expect, assert } = require('chai');
const mathEnforcer = require('./script');


describe('mathEnforcer', () => {
    describe('addFive', () => {
        // addFive(num) - A function that accepts a single parameter:
        //   - If the parameter is NOT a number, the function should return undefined.
    
        it('should return UNDEFINED if parameter is not a number', () => {
            expect(mathEnforcer.addFive(undefined)).to.be.equal(undefined);
            expect(mathEnforcer.addFive('test')).to.be.equal(undefined);
        });
        //   - If the parameter is a number, add 5 to it, and return the result.
        it('should return correct result with positive input', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(15)).to.be.equal(20);
        });
        it('should return correct result with negative input', () => {
            expect(mathEnforcer.addFive(-15)).to.be.equal(-10);
            expect(mathEnforcer.addFive(-20)).to.be.equal(-15);
        });
        it('should return correct result with floating-point input', () => {
            expect(mathEnforcer.addFive(-15,5)).to.be.equal(-10,5);
            expect(mathEnforcer.addFive(0.2)).to.be.equal(5.2);
        });
    });
    
    describe('subtractTen', () => {
        // subtractTen(num) - A function that accepts a single parameter:
        //   - If the parameter is NOT a number, the function should return undefined. 
        it('should return UNDEFINED if parameter is not a number', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen('test')).to.be.equal(undefined);
        });
        //   - If the parameter is a number, subtract 10 from it, and return the result.
        it('should return correct result when integer', () => {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
        });
        it('should return correct result when floating-point number', () => {
            expect(mathEnforcer.subtractTen(10.2)).to.equal(0.1999999999999993);
            expect(mathEnforcer.subtractTen(0.5)).to.equal(-9.5);
        });


    });
    
    describe('sum', () => {
        // sum(num1, num2) - A function that accepts two parameters:
        //   - If any of the 2 parameters is NOT a number, the function should return undefined.
        it('should return UNDEFINED if first parameter is not a number', () => {
            expect(mathEnforcer.sum(undefined, 5)).to.be.equal(undefined);
            expect(mathEnforcer.sum('test', 5)).to.be.equal(undefined);
        });
        it('should return UNDEFINED if second parameter is not a number', () => {
            expect(mathEnforcer.sum(5, undefined)).to.be.equal(undefined);
            expect(mathEnforcer.sum(5, 'test')).to.be.equal(undefined);
        });
        //   - If both parameters are numbers, the function should return their sum. 
        it('should return correct result with integer', () => {
            expect(mathEnforcer.sum(5,10)).to.be.equal(15);
        });
        it('should return correct result with integer', () => {
            expect(mathEnforcer.sum(5.5, 10.5)).to.be.equal(16);
        });
    });
});



