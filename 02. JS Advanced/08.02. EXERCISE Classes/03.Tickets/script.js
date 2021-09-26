function solve(array, criterion){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }
    let outputArray = [];

    for (const element of array) {
        let [destination, price, status] = element.split('|');
        let instance = new Ticket();
        instance.destination = destination;
        instance.price = Number(price);
        instance.status = status;
        outputArray.push(instance);
    }

    if (criterion === 'destination'){
        return outputArray.sort((a,b) => a.destination.localeCompare(b.destination));
    } else if (criterion === 'status'){
        return outputArray.sort((a,b) => a.status.localeCompare(b.status));
    } else {
        return outputArray.sort((a,b) => a.price - b.price);
    }
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'available'
));