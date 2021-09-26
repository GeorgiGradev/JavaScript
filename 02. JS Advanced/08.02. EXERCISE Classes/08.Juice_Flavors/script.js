function solve(array){
    let bottles = new Map();
    let juices = {};
 
    for(let element of array){
        let [juice, quantity] = element.split(' => ');
        quantity = Number(quantity);
 
        if(!juices.hasOwnProperty(juice)){
            juices[juice] = 0;
        }
 
        juices[juice] += quantity;
 
        if(juices[juice] / 1000 >= 1){
            let bottlesCount = Math.trunc(juices[juice] / 1000);
            juices[juice] -= bottlesCount * 1000;
            if(!bottles.has(juice)){
                bottles.set(juice, 0);
            }
            bottles.set(juice, bottles.get(juice) + bottlesCount);
        }
        
    }
 
    for(let [key, value] of bottles.entries()){
        console.log(key+' => '+value);
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)
console.log('------');
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);