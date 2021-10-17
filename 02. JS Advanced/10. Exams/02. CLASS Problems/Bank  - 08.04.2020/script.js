class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.some(x => x.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        const newClient = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            personalId: customer.personalId,
        };
        this.allCustomers.push(newClient);
        return newClient;
    } 

    depositMoney(personalId, amount) {
        if (this.allCustomers.some(x => x.personalId == personalId) == false){
            throw new Error(`We have no customer with this ID!`);
        } 
        const customer = this.allCustomers.find(x => x.personalId == personalId);
        if (!customer.totalMoney){
            customer.totalMoney = 0;
            customer.transactions = []; 
        }
        customer.totalMoney += amount;
        customer.transactions.push(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        if (this.allCustomers.some(x => x.personalId == personalId) == false){
            throw new Error(`We have no customer with this ID!`);
        } 
        const customer = this.allCustomers.find(x => x.personalId == personalId);
        if (customer.totalMoney < amount){
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        if (this.allCustomers.some(x => x.personalId == personalId) == false){
            throw new Error(`We have no customer with this ID!`);
        } 
        const customer = this.allCustomers.find(x => x.personalId == personalId);

        const output = [];
        output.push(`Bank name: ${this._bankName}`);
        output.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        output.push(`Customer ID: ${customer.personalId}`);
        output.push(`Total Money: ${customer.totalMoney}$`);
        output.push(`Transactions:`);
        for (const transaction of customer.transactions.sort((a,b) => b.localeCompare(a))) {
            output.push(transaction);
        }
        return output.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));


