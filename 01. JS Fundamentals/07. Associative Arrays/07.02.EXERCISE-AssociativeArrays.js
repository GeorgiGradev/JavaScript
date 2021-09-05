// 01. Word Tracker
function tracker(input){
    let [wordsToFind, ...words] = input;
    let wordsToFindAsArray = wordsToFind.split(' ');
    let outputArray = {};

    for (const singleWordToFind of wordsToFindAsArray) {
        for (const word of words) {
            if (singleWordToFind === word){
                if (outputArray.hasOwnProperty(word)){
                    outputArray[word] += 1;
                } else {
                    outputArray[word] = 1;
                }
            }
        }
    }

    let sortedArray = Object.entries(outputArray).sort((a,b) => b[1] - a[1])

    for (const [key, value] of sortedArray) {
        console.log(`${key} - ${value}`)
    }
}

tracker([
        'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
        , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
)


//02. Odd Ocurrences
function occurances(input){
    let map = new Map();
    let array = input.toLowerCase().split(' ');

    for (const iterator of array) {
        if (map.has(iterator)){
            let currentValue = map.get(iterator);
            let value = currentValue + 1;
            map.set(iterator, value);
        } else {
            map.set(iterator, 1)
        }
    }
    let output = [];
    for (const [key, value] of map) {
        if (value % 2 !== 0){
            output.push(key)
        }
    }
    console.log(output.join(" "))
}   
occurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')


//03. Piccolo
function piccolo(input){
    let output = [];

    for (const current of input) {
        let tokens = current.split(', ')
        let car = tokens[1];
        let direction = tokens[0]

        if (direction === 'IN'){
            if (!output.includes(car)){
                output.push(car);  
            }
        } else if (direction === 'OUT'){
            if (output.includes(car)){
                output.splice(output.indexOf(car), 1)
            }
        }
    }
   var sortedOutput = output.sort((a, b) => a.localeCompare(b));
   if (output.length === 0){
       console.log('Parking Lot is Empty')
   } else {
    console.log(sortedOutput.join('\n'))
   }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)