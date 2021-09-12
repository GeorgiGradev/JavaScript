//01. Calorie Object
function calorieObject(input){
    let result = {};
    for(let i = 0; i < input.length - 1; i+=2){
            result[input[i]] = Number(input[i+1])
        }

    console.log(result);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);


//02. Construction Crew
function constructionCrew(object){
    if (object.dizziness === true){
        object.levelOfHydrated += object.weight * object.experience * 0.1;
        object.dizziness = false
    }

    return object;
}
console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));
console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));
console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  ));


//03. Car Factory
function carFactory(input){
    const engine = {
        smallEngine: {power: 90, volume: 1800},
        normalEngine: {power: 120, volume: 2400},
        monsterEngine: {power: 200, volume: 3500},
    }
    const carriage = {
        hatchback: { type: 'hatchback', color: null},
        copue: { type: 'coupe', color: null}
    }
    function wheels(wheelsize){
        let wheelsArray = [];
        if (wheelsize % 2 == 0){
            wheelsize -=1;
        } 
        wheelsArray.push(wheelsize, wheelsize, wheelsize, wheelsize);
        return wheelsArray;
    }
    let output = {
        model: input.model,
        engine: {power: null, volume: null},
        carriage: {type: input.carriage, color: input.color},
        wheels: wheels(Number(input.wheelsize))
    };

    if (input.power <= engine.smallEngine.power){
        output.engine.power = engine.smallEngine.power;
        output.engine.volume = engine.smallEngine.volume;
    } else if (input.power > engine.smallEngine.power 
        && input.power <= engine.normalEngine.power){
        output.engine.power = engine.normalEngine.power;
        output.engine.volume = engine.normalEngine.volume;
    } else {
        output.engine.power = engine.monsterEngine.power;
        output.engine.volume = engine.monsterEngine.volume;
    }
    return output;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));


//04. Heroic Inventory
function heroicinventory(input){
    let output = [];
    for (const iterator of input) {
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);
        items = items != undefined ? items.split(', ') : [];
        output.push({name,level,items});
    }
   return JSON.stringify(output);
}
console.log(heroicinventory(
['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1']
));
console.log(heroicinventory(
['Jake / 1000 / Gauss, HolidayGrenade']
));


// 05. Lowest Prices in Cities
function lowestPrice(input) {
    let products = {};
    for (const element of input) {
        let [townName, productName, productPrice] = element.split(' | ');
        productPrice = Number(productPrice);

        if (!products.hasOwnProperty(productName)){
            products[productName] = {};
        }
        products[productName][townName] = productPrice;
    }
    let result = [];
    for (const productName in products) {
        let townsSorted = Object.entries(products[productName]).sort((a, b) => a[1] - b[1]);
        let cheapestTown = townsSorted[0];
        result.push(`${productName} -> ${cheapestTown[1]} (${cheapestTown[0]})`);
    }
    return result.join('\n');
}

console.log(lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
));

//06. Store Catalogue
function storeCatalogue(input) {
    let output = {};
    for (const element of input) {
        let [name, price] = element.split(' : ')
        price = Number(price);

        let initial = name[0];
        if (output[initial] == undefined) {
            output[initial] = {};
        }
        output[initial][name] = price;

    }

    let result = [];
    let initialsSorted = Object.keys(output).sort((a, b) => a.localeCompare(b));

    for (const key of initialsSorted) {
        let products = Object.entries(output[key]).sort((a,b) => a[0].localeCompare(b[0]));
        result.push(key);
        let productsAsStrings = products
        .map(x => `  ${x[0]}: ${x[1]}`) 
        .join('\n');
        result.push(productsAsStrings);
    }
    return result.join('\n'); 
}

console.log(storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
));
console.log(storeCatalogue(['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
));


//07. Towns to JSON
function townsToJson(input) {
    let title = splitRow(input[0])
    let town = title[0];
    let latitude = title[1];
    let longitude = title[2];

    let object = {};
    let array = [];

    for (let i = 1; i < input.length; i++) {
        let splitted = splitRow(input[i])
        let townName = splitted[0];
        let latitudeValue = Number(Number(splitted[1]).toFixed(2));
        let longitudeValue = Number(Number(splitted[2]).toFixed(2));
        object = {
            [town]: townName,
            [latitude]: latitudeValue,
            [longitude]: longitudeValue,
        }
        array.push(object)
    }

    return JSON.stringify(array)


    function splitRow(str){
        return str.split(/\s*\|\s*/).filter(x => x !== "")
    }
}

console.log(townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
console.log(townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
));


//08. Rectangle
function rectangle(width, height, colorInput){
    let firstLetter = colorInput.substring(0, 1);
    let color = colorInput.replace(firstLetter,firstLetter.toUpperCase())
    let obj = {
        width,
        height,
        color,
        calcArea(){
           return this.width * this.height
        }
    }
    return obj
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


//10. Heroes
function solve() {
    const canCast = (state) => ({
        cast : (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    })

    const canFight = (state) => ({
        fight : () => {
            console.log(`${state.name} slashesh at the foe!`)
            state.stamina--;
        }
    })

    const fighter = (name) => {
        let state = {
            name,
            health : 100,
            stamina : 100
        }
        return Object.assign(state,canFight(state));
    }

    const mage = (name) => {
        let state = {
            name,
            health : 100,
            mana : 100
        }
        return Object.assign(state,canCast(state));
    }

    return {mage : mage, fighter : fighter};
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);












