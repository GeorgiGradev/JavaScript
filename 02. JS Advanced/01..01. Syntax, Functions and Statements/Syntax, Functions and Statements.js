//01. Echo Function
function echo(input) {
    console.log(input.length);
    console.log(input);
}
echo('Hello, JavaScript!');
echo('strings are easy');


//02 String length
function stringLength(a, b, c) {
    let totalLength = a.length + b.length + c.length;
    console.log(totalLength);
    console.log(Math.trunc(totalLength / 3));

}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');


//03. Largest Number
function largestNumber(a,b,c) {
    console.log(`The largest number is ${Math.max(a,b,c)}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);


//04. Circle Area
function circleArea(input) {
    let inputType = (typeof input)
    if (inputType == 'number'){
        console.log((Math.PI * Math.pow(input, 2)).toFixed(2));
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`); 
    }
}
circleArea(5);
circleArea('name');


//05. Math Operations
function mathOperations(number1, number2, str) {
    let num1 = Number(number1);
    let num2 = Number(number2)
    let result = 0;

    switch(str) {
        case '+': result = num1 + num2; break;
        case '-': result = num1-num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case "**": result = num1 ** num2; break;
    }
    console.log(result);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');


//06. Sum of Numbers N…M
function sumOfNumbers(number1, number2) {
    let num1 = Number(number1);
    let num2 = Number(number2);
    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    console.log(result);
}
sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');


//07. Day of Week
function dayOfWeek(str) {
    switch (str){
        case 'Monday': console.log('1'); break;
        case 'Tuesday': console.log('2'); break;
        case 'Wednesday': console.log('3'); break;
        case 'Thursday': console.log('4'); break;
        case 'Friday': console.log('5'); break;
        case 'Saturday': console.log('6'); break;
        case 'Sunday': console.log('7'); break;
        default: console.log('error')
    }
}
dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');


//08. Square of Stars
function squareOfStars(input) {
    if (typeof(input) === 'number'){
        for (let i = 0; i < input; i++) {
            console.log('* '.repeat(input));
        }
    } else {
        for (let i = 0; i < 5; i++) {
            console.log('* '.repeat(5));
        }
    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars();


//09. Aggregate Elements
function aggregateElements(array) {
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        sum2 += 1 / array[i]
    }
    console.log(sum);
    console.log(sum2);
    console.log(array.join(''))
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);