function demo(){
    let obj = {
        firstName: 'Ivan',
        lastName: 'Petrov',
    }
    return Object.entries(obj);
}
console.log(demo()); // => firstName, lastName


class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    speak() {
        return `Hi ${this.name}`;
    }
}

let student = new Student('Ivan Petrov', 6)
console.log(student) //=>Student { name: 'Ivan Petrov', grade: 6 }
console.log(student.speak()); // => Hi Ivan Petrov


// 01  Employees
function solve(array) {
    for (const element of array) {
        let person = {
            name: element,
            id: element.length
        }
        console.log(`Name: ${person.name} -- Personal Number: ${person.id}`);
    }
}

solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);


// 02. Towns
function solve(input) {

    for (const element of input) {
        let [town, latitude, longitude] = element.split(' | ');
        let obj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }
        console.log(obj);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)


//03. Store Provision
function solve(currentStock, products) {
    let store = [];
    for (let i = 0; i < currentStock.length - 1; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        let productObject = {
            product,
            quantity,
        }
        store.push(productObject);
    }

    for (let i = 0; i < products.length - 1; i += 2) {
        let product = products[i];
        let quantity = Number(products[i + 1]);

        let productObject = {
            product,
            quantity,
        }

        let indexOfProduct = store.findIndex(x => x.product === product);

        if (indexOfProduct === -1) {
            store.push(productObject);
        } else {
            store[indexOfProduct].quantity += productObject.quantity;
        }
    }

    for (const element of store) {
        console.log(`${element.product} -> ${element.quantity}`)
    }
}

solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);


// 04. Movies
function solve(input) {
    let movies = [];

    for (const element of input) {
        let name = '';
        if (element.includes('addMovie')) {
            let array = element.split('addMovie ');
            name = array[1];

            let movieObj = {}
            movieObj.name = name;
            movies.push(movieObj);
        }
    }

    for (const element of input) {
        if (element.includes('directedBy')) {
            let array = element.split(' directedBy ');
            let directorName = array[1];
            let movieName = array[0];

            let movie = movies.find(x => x.name === movieName);

            if (movie !== undefined) {
                movie.director = directorName;
            }
        }
    }

    for (const element of input) {
        if (element.includes('onDate ')) {
            let array = element.split(' onDate ');
            let date = array[1];
            let movieName = array[0];

            let movie = movies.find(x => x.name === movieName);

            if (movie !== undefined) {
                movie.date = date;
            }
        }
    }

    for (const movie of movies) {
        if (movie.director && movie.date && movie.name) {
            console.log(JSON.stringify(movie))
        }
    }
}

solve([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
)


//05.Inventory
function heroes(input) {
    let array = [];
    for (const element of input) {
        let [name, level, ...items] = element.split(' / ');
        let hero = {
            name,
            level: Number(level),
            items: items[0].split(', '),
        }
       array.push(hero);
    }

    array.sort((a, b) => a.level - b.level);

    for (const element of array) {
        let name = element.name;
        let level = element.level;
        let items = element.items.sort((a, b) => a.localeCompare(b));

       console.log(`Hero: ${name}\nlevel => ${level}\nitems => ${items.join(", ")}`)
    }

}
heroes([
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
)


// 06. Make a Dictionary
function solve(json){
    let array = [];
    for (const jsonElement of json) {
        let parsed = JSON.parse(jsonElement)
        for (const parsedKey in parsed) {
            let object = {
                term: parsedKey,
                definition: parsed[parsedKey]
            }
            let existingObject = array.find(x => x.term === object.term);

            if (existingObject){
                existingObject.definition = parsed[parsedKey];
            } else {
                array.push(object);
            }

        }
    }
    array.sort((a,b) => a.term.localeCompare(b.term))

    for (const key in array) {
        console.log(`Term: ${array[key].term} => Definition: ${array[key].definition}`)
    }
}
solve([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
)


//07. Class Vehicle
class Vehicle {
    constructor(type, model, {engine, power}, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine,
            power,
            quality: engine * power
        }
        this.fuel = Number(fuel);
    }
    drive(fuelloss){
        return this.fuel -= fuelloss;
    }

}
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

























































