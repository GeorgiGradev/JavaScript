const { expect } = require('chai');
const dealership = require('./dealership');

describe('dealership', () => {
    describe('newCarCost', () => {
        it('returns correct result with correct input', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.equal(10000);
            expect(dealership.newCarCost('Audi A8 D5', 30000)).to.equal(5000);
            expect(dealership.newCarCost('Audi TT 8J', 30000)).to.equal(16000);
            expect(dealership.newCarCost('Audi TT 8J', 10000)).to.equal(-4000);
        });
        it('returns default value if not existing model', () => {
            expect(dealership.newCarCost('Trabant', 1000)).to.equal(1000);
        });
    });

    describe('carEquipment', () => {
        it('returns correct value with correct input', () => {
            let input = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexes = [0, 2, 3];
            let expectedResult = ['heated seats', 'sport rims', 'navigation'];
            expect(dealership.carEquipment(input, indexes)).deep.to.equal(expectedResult);
        });
    });

    describe('euroCategory', () => {
        it('recieves discount with value more or equal 4', () => {
            let price = dealership.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05);
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: ${total}.`);
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${total}.`);
        });
        it('no discount when value under 4', () => {
            expect(dealership.euroCategory(3)).to.equal(`Your euro category is low, so there is no discount from the final price!`);
        });
    });
});



