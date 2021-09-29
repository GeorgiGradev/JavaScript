const { expect } = require('chai');
const { assert } = require('chai');
const pizzUni = require('./script');

/* 
makeAnOrder(obj) - A function that accepts an object:
 -	the object includes {orderedPizza: ‘the name of the pizza’, orderedDrink: ‘the name of the drink’}
-	the function checks if there are ordered pizza and a drink.
-	Then the function returns confirmation message for your order
*/


describe('makeAnOrder', () => {
    let noDrink = { orderedPizza: 'pizza' };
    let noPizza = { orderedDrink: 'cola' };
    let correctOrder = { orderedPizza: 'pizza', orderedDrink: 'cola' };
    let noPizzaNoDrink = {};
    it('should return error if no pizza ordered', () => {
        expect(() => pizzUni.makeAnOrder(noPizza)).to.Throw('You must order at least 1 Pizza to finish the order.');
    });
    it('should return correct result when pizza ordered', () => {
        expect(pizzUni.makeAnOrder(noDrink)).to.equal(`You just ordered pizza`);
    });
    it('should return correct result when pizza and drink ordered', () => {
        expect(pizzUni.makeAnOrder(correctOrder)).to.equal(`You just ordered pizza and cola.`);
    });
});


/*
getRemainingWork(statusArr) - A function that accepts array:
-	the array should look like: [{pizzaName: ‘the name of the pizza’, status: ‘ready’ / ‘preparing’ }, …]
-	the function checks the status of the order and returns a message with the order status
*/

describe('getRemainingWork', () => {
    let statusArr1 =
        [{ pizzaName: 'pizza1', status: 'preparing' },
        { pizzaName: 'pizza2', status: 'preparing' },
        { pizzaName: 'pizza3', status: 'ready' }]
    it('should return pizzas still preparing', () => {
        expect(pizzUni.getRemainingWork(statusArr1)).to.equal(`The following pizzas are still preparing: ${statusArr1.filter(p => p.status === 'preparing').map(p => p.pizzaName).join(', ')}.`);
    });

    let statusArr2 =
        [{ pizzaName: 'pizza1', status: 'ready' },
        { pizzaName: 'pizza2', status: 'ready' },
        { pizzaName: 'pizza3', status: 'ready' }]
    it('should return pizzas still preparing', () => {
        expect(pizzUni.getRemainingWork(statusArr2)).to.equal(`All orders are complete!`);
    });
});


/*
orderType(totalSum, typeOfOrder) - A function that accepts two parameters (number, string):
-	the function first checks what is the type of the order (‘Carry Out’ , ‘Delivery’)
-	if the type of the order is ‘Carry Out’ you get 10% discount
-	then the function returns the total sum of the order
*/
describe('orderType', () => {
    it('should give 10% discount for CARRY OUT orders', () => {
        expect(pizzUni.orderType(100, 'Carry Out')).to.equal(90);
    });
    it('should give NO discount for DELIVERY orders', () => {
        expect(pizzUni.orderType(100, 'Delivery')).to.equal(100);
    });
});