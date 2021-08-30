// 01. Train
function solve(array){
    let wagonsAsArray = array.shift().split(' ').map(Number);

    let wagonCapacity = Number(array.shift());

    for (const command of array) {
        if (command.includes('Add')){
            let wagonWithPassengersToAdd = Number(command.split(' ').pop());
            wagonsAsArray.push(wagonWithPassengersToAdd);

        } else {
            let passengers = Number(command);
            for (let i = 0; i <= wagonsAsArray.length; i++) {
                if (wagonCapacity >= wagonsAsArray[i] + passengers){
                    wagonsAsArray[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagonsAsArray.join(' '));
}

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)
solve(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)


// 02. Distinct Array
function solve(array){
    let newArray = [];
    while (array.length > 0){
        let number = array.shift();
        while (array.includes(number)){
            let index = array.indexOf(number);
            array.splice(index,1);
        }
        newArray.push(number);
    }
    console.log(newArray.join(' '));
}
solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);


// 03. House Party
function solve(array){
    let guestsList = [];
    for (const element of array) {
        let name = element.split(' ')[0];
        if (!element.includes('not')){
            if (!guestsList.includes(name)){
                guestsList.push(name);
            }
            else{
                console.log(`${name} is already in the list!`)
            }
        } else{
            if (guestsList.includes(name)){
                let index = guestsList.indexOf(name);
                guestsList.splice(index,1);
            }
            else{
                console.log(`${name} is not in the list!`)
            }
        }
    }
    for (const guest of guestsList) {
        console.log(guest)
    }
}
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);


// 04. Sorting
function solve(arr) {
    let sliced = arr.slice()
    const biggestNums = arr.sort((x, y) => y - x)
    const lowestNums = sliced.sort((x, y) => x - y)
    const concatArray = []

    biggestNums.forEach((x, i) => {
        concatArray.push(x)
        concatArray.push(lowestNums[i])
    })

    console.log(
        concatArray
            .splice(concatArray.length / 2)
            .reverse()
            .join(" ")
    )
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])


// 05. Sort an Array by 2 Criteria
function solve(arr) {
    return arr
        .sort((x, y) => {
            return x.length - y.length !== 0
                ? x.length - y.length
                : x.toLocaleLowerCase().localeCompare(y.toLocaleLowerCase())
        })
        .forEach(x => console.log(x))
}
solve(["alpha", "beta", "gamma"]);
solve(["Isaac", "Theodor", "Jack", "Harrison", "George"]);


// 06. Bomb Numbers
function solve(array, bomb){
    while(array.includes(bomb[0])){
        let bombIndex = array.indexOf(bomb[0]);
        let bombPower = bomb[1];

        array.splice(bombIndex + 1, bombPower);
        array.splice(bombIndex - bombPower, bombPower + 1)
    }

    let result = 0;
    for (const element of array) {
        result += element;
    }
    console.log(result)
}

solve([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)
solve([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)
solve([1, 7, 7, 1, 2, 3],
    [7, 1]
)
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
)


// 07. Search for a Number
function solve(array, manipulator){
    let [elementsToTake, elementsToDelete, elementsToFind] = manipulator

    let newArray = array.slice(0,elementsToTake);
    newArray.splice(0,elementsToDelete);
    let times = 0;
    for (const element of newArray) {
        if (element === elementsToFind){
            times++;
        }
    }

    console.log(`Number ${elementsToFind} occurs ${times} times.`);
}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3])










