//01. Print an Array with a Given Delimiter
function delimiter(array, string) {
    console.log(array.join(string));
}
delimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
);
delimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);


//02. Print Every N-th Element from an Array 
function every(array, num) {
    let filteredArr = array.filter((element, index) => index % num === 0)
    return filteredArr;
}
console.log(every(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
console.log(every(['dsa',
'asd', 
'test', 
'tset'], 
2
));
console.log(every(['1', 
'2',
'3', 
'4', 
'5'], 
6
));


//03. Add and Remove Elements  
function addAndRemoveElements(input) {
    let count = 1
    const array = []
    const actions = {
        add: x => array.push(x),
        remove: () => array.pop(),
    }

    input.forEach(x => actions[x](count++))
    return array.length !== 0 ? array.join("\n") : "Empty"
}
console.log(addAndRemoveElements(['add', 
'add', 
'add', 
'add']
));
console.log(addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
));
console.log(addAndRemoveElements(['remove', 
'remove', 
'remove']
));

// 04. Rotate Array
function rotateArray(array, num) {
    for (let i = 0; i < num % array.length; i++) {
        array.unshift(array.pop());
    }
    return array.join(' ');
}
console.log(rotateArray(['1', 
'2', 
'3', 
'4'], 
2
));
console.log(rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));

// 05. Extract Increasing Subsequence from Array
function extractIncreasingSubsequence(array) {
    return array.reduce((accumulator, element) => {
        if (element >= (accumulator[accumulator.length - 1] || array[0])) {
            accumulator.push(element)
        }
        return accumulator
    }, [])
}
console.log(extractIncreasingSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(extractIncreasingSubsequence([1,
    2,
    3,
    4]
));
console.log(extractIncreasingSubsequence([20,
    3,
    2,
    15,
    6,
    1]
));


// 06. List of Names
function listOfName(array) {
    let sortedArray = array.sort((a, b) => a.localeCompare(b));
    let outputArray = [];
    for (let i = 0; i < sortedArray.length; i++) {
        outputArray.push(`${i + 1}.${sortedArray[i]}`)
    }
    return outputArray.join('\n');
}
console.log(listOfName(["John", "Bob", "Christina", "Ema"]));


// 07. Sorting Numbers
function sortingNumbers(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let outputArray = [];
    while (sortedArray.length > 0) {
        let first = sortedArray.shift();
        outputArray.push(first);
        if (sortedArray.length > 0) {
            let last = sortedArray.pop();
            outputArray.push(last);
        }
    }
    return outputArray;
}
 console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));


// .sort((a,b) => )
// 08. Sort an Array by 2 Criteria
function sortBy2Criteria(array) {
    array.sort((a, b) => {
        return a.length == b.length ? a.toLowerCase().localeCompare(b.toLowerCase()) : a.length - b.length
    });

    return array.join('\n');
}
console.log(sortBy2Criteria(['alpha', 
'beta', 
'gamma']
));
console.log(sortBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));
console.log(sortBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']
));


// 09. Magic Matrices
function magicMatrices(matrix) {
    let magicSum = matrix[0].reduce((accumulator, element) => accumulator + element);

    let isTrue = true;
    for (let row = 0; row < matrix.length; row++) {
       let currentSum = matrix[row].reduce((accumulator, element) => accumulator + element);
        if (currentSum != magicSum) {
            return !isTrue;
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        let currentSum = 0;
        for (let col = 0; col < matrix.length; col++) {
            currentSum += matrix[col][row];
        }
        if (currentSum != magicSum) {
            return !isTrue;
        }
    }
    return isTrue;
}

console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]   
   ));
console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));
console.log(magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));