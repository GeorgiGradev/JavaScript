const assert = require('chai').assert;
const createCalculator = require('./script.js');

describe('createCalculator()', function () {
    let calculator;

    beforeEach(function () {
        calculator = createCalculator();
    });

    it('should get return 0', function () {
        let result = calculator.get();

        assert.equal(result, 0);
    });

    it("should return 2", function () {
        calculator.add(1);
        calculator.add(1);

        let result = calculator.get();

        assert.equal(result, 2);
    });

    it('should return -1', function () {
        calculator.subtract(1);

        let result = calculator.get();

        assert.equal(result, -1);
    });

    it('should return 3', function () {
        calculator.add(5);
        calculator.subtract(2);

        let result = calculator.get();

        assert.equal(result, 3);
    });

    it('should return 3', function () {
        calculator.add(10);
        calculator.subtract('7');
        calculator.add('-2');
        calculator.subtract(-1);

        let result = calculator.get();

        assert.equal(result, 2);
    });

    it('should return 8', function () {
        calculator.add(5);
        calculator.subtract(-2);
        calculator.add(5);
        calculator.subtract(4);

        let result = calculator.get();

        assert.equal(result, 8);
    });

    it('should return NaN', function () {
        calculator.add('test');

        let result = NaN;

        assert.isNaN(result);
    });

    it('should return NaN', function () {
        calculator.subtract('test');

        let result = NaN;

        assert.isNaN(result);
    });
});