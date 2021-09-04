// 01. Phone book
function phoneBook(input){
    let map = {};
    for (const inputElement of input) {
        let tokens = inputElement.split(" ");
        let key = tokens[0];
        let value = tokens[1];
        map[key] = value;
    }
    for (const [key, value] of Object.entries(map)) {
        console.log(`${key} -> ${value}`)
    }
}
// phoneBook(['Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344'
//     ]
// )


// 02. Meetings
function meetings(input){
    let map = {};
    for (const element of input) {
        let tokens = element.split(' ')
        let day = tokens[0];
        let name = tokens[1];
        if (map.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        } else {
            map[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }
    for (const [key, value] of Object.entries(map)) {
        console.log(`${key} -> ${value}`)
    }
}
// meetings(['Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim']
// )


// 03. Address Book
function addressBook(input){
    let map = {};
    for (const element of input) {
        let tokens = element.split(':')
        let name = tokens[0];
        let address = tokens[1];
        map[name] = address;
    }
    let sorted = Object.entries(map);
    sorted.sort((a,b) =>  a[0].localeCompare(b[0]));
    console.log(sorted)
}
// addressBook(['Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd']
// )


// 04. Storage
function storage(input){
    let map = new Map();
    for (const element of input) {
        let tokens = element.split(' ')
        let item = tokens[0];
        let quantity = Number(tokens[1]);
        if (map.has(item)){
            map.set(item, map.get(item) + quantity)
        } else {
            map.set(item, quantity);
        }
    }
    for (const kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}
// storage(['tomatoes 10',
//     'coffee 5',
//     'olives 100',
//     'coffee 40']
// )










