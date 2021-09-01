//01. Person info
function solve(firstName, lastName, age){
    let object  = {
        firstName,
        lastName,
        age
    }
    return object;
}
solve("Peter",
    "Pan",
    "20"
);


// 02. City
function solve(city) {
    //entries
    let entries = Object.entries(city);
    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
    // keys
    let properties = Object.keys(city);
    for (const key of properties) {
        console.log(`${key} -> ${city[key]}`)
    }
    //values
    for (const value in city) {
        console.log(`${value} -> ${city[value]}`)
    }
}
solve({
        name: "Sofia",
        population: 1238438,
        country: "Bulgaria",
    }
)


// 03. Convert to Object
function convertToObject(json){
    let converted = JSON.parse(json);
    for (const element in converted) {
        console.log(`${element}: ${converted[element]}`)
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');


// 04. Convert to JSON
function convertToJson(name, lastName, hairColor){
    let person = {
        name,
        lastName,
        hairColor
    }
    return JSON.stringify(person);
}
console.log(convertToJson('George',
    'Jones',
    'Brown'
))


// 05. Cats
function solve(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    function meaw() {
        for (const element of array) {
            let [name, age] = element.split(' ');
            let cat = new Cat(name, age);
            console.log(`${cat.name}, age ${cat.age} says Meow`);
        }
    }
    meaw();
}
solve(['Mellow 2', 'Tom 5']);


// 06. Songs
function solve(array){
    class Song{
        constructor(typeList,name,time) {
            this.typelist = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsNumber = array.shift();
    let type = array.pop();

    for (const element of array) {
        let [typeList, name, time] = element.split('_');
        if (typeList == type || type == 'all'){
            console.log(name);
        }
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);



















