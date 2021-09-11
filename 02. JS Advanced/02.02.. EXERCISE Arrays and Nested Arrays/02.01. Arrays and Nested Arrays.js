//01. Even Position Element
function solve(input) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            array.push(input[i]);
        }
    }
    console.log(array.join(" "));
}
solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);


//02. Last K Numbers Sequence
function sequence(n, k) {
    let array = [1];
    for (let i = 0; i < k - 1; i++) {
        array.unshift(0)
    }

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        for (let l = array.length - 1; l >= array.length - k; l--) {
            sum += array[l];
        }
        array.push(sum)
    }

    while (array[0] === 0) {
        array.shift();
    }

    return array;
}

function sequence(n, k) {
    const array = [1]
    for (let i = 1; i < n; i++) {
        array.push(array.slice(-k).reduce((a, b) => a + b, 0))
    }
    return array;
}
console.log(sequence(6, 3));
console.log(sequence(8, 2));


//03. Sum First Last
function firstlast(input) {
    return sum = Number(input[0]) + Number(input[input.length - 1]);
}
console.log(firstlast(['20', '30', '40']));
console.log(firstlast(['5', '10']));

//04. Negative / Positive Numbers
function sort(input) {
    let array = [];
    for (const iterator of input) {
        if (iterator < 0) {
            array.unshift(iterator);
        } else {
            array.push(iterator);
        }
    }
    console.log(array);
}
sort([7, -2, 8, 9]);
sort([3, -2, 0, -1]);


//05. Smallest Two Numbers
function smallest(input) {
    let array = [];
    let smallestNum = Math.min.apply(null, input)
    let indexOfSmallest = input.indexOf(smallestNum);
    let spliced = input.splice(indexOfSmallest, 1)
    array.push(spliced);

    smallestNum = Math.min.apply(null, input)
    indexOfSmallest = input.indexOf(smallestNum);
    spliced = input.splice(indexOfSmallest, 1)
    array.push(spliced);
    console.log(array.join(" "));
}
smallest([30, 15, 50, 5]);
smallest([3, 0, 10, 4, 7, 3]);

//06. Bigger Half
function biggerHalf(input) {
    input.sort((a, b) => a - b);
    let result = [];
    if (input.length % 2 === 0) {
        return result = input.splice(input.length / 2, input.length / 2)
    } else {
        return result = input.splice((input.length - 1) / 2, (input.length + 1) / 2)
    }

}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));


//07. Piece of Pie
function pie(array, str1, str2) {
    let index1 = array.indexOf(str1);
    let index2 = array.indexOf(str2);

    return array.slice(index1, index2 + 1);
}
console.log(pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));

console.log(pie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));


//08. Process Odd Positions
function odd(input) {
    let newArray = input.map(x => x * 2);
    let result = [];
    for (let i = 0; i < newArray.length; i++) {
        if (i % 2 !== 0) {
            result.push(newArray[i])
        }
    }
    return result.reverse();
}
console.log(odd([10, 15, 20, 25]));
console.log(odd([3, 0, 10, 4, 7, 3]));


//09. Biggest Element
function biggestElement(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;
    for (const element of matrix) {
        let currentBiggest = Math.max(...element);
        if (currentBiggest > biggest) {
            biggest = currentBiggest;
        }
    }
    console.log(biggest);
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
   );
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );


//10. Diagonal Sums
function diagonal(matrix) {
    let diagonalSum = 0;
    let secDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonalSum += matrix[i][i];
        secDiagonal += matrix[i][matrix.length - i - 1];
    }
    console.log(`${diagonalSum} ${secDiagonal}`);
}
diagonal([[20, 40],
          [10, 60]]
   );
diagonal([[3, 5, 17],
         [-1, 7, 14],
         [1, -8, 89]]
   );

//11. Equal Neighbors
function neigbours(matrix) {
    let counter = 0;
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let row = 0; row < matrix[i].length - 1; row++) {
            if (matrix[i][row] == matrix[i + 1][row]) {
                let chedk1 = matrix[i][row];
                let check2 = matrix[i + 1][row]
                console.log(`${chedk1} ${check2}`)
                counter++;
            }
            if (matrix[i][row] == matrix[i][row + 1]){
                let chedk1 = matrix[i][row];
                let check2 = matrix[i][row+1]
                console.log(`${chedk1} ${check2}`)
                counter++;
            }
        }
    }
    return counter;
}
console.log(neigbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));
console.log(neigbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));

console.log(neigbours([
[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2],
]))
