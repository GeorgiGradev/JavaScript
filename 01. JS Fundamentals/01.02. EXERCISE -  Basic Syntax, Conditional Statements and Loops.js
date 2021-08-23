// 1. Ages
function age(num) {
    let n = Number(num);
    if (n >= 0 && n <= 2) {
        console.log("baby")
    } else if (n >= 3 && n <= 13) {
        console.log("child");
    } else if (n >= 14 && n <= 19) {
        console.log("teenager");
    } else if (n >= 20 && n <= 65) {
        console.log("adult");
    } else if (n >= 66) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}
age(20);
age(1);
age("100");
age(-1);


// 2. Rounding
function rounding(num, precision){
    if (precision > 15){
        precision = 15;
    }
    let n = Number(parseFloat(num.toFixed(precision)));
    console.log(n);
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5,3);


// 3. Division
function division(num){
    let n = Number(num);
    if (n % 10 == 0){
        console.log('The number is divisible by 10');
    } else if (n % 7 == 0){
        console.log('The number is divisible by 7');
    } else if (n % 6== 0){
        console.log('The number is divisible by 6');
    } else if (n % 3 == 0){
        console.log('The number is divisible by 3');
    } else if (n % 2 == 0){
        console.log('The number is divisible by 2');
    } else {
        console.log('Not divisible')
    }
}
division(30);
division(15);
division(12);
division(1643);


// 4. Vacation
function vacation(people, type, dayOfWeek){
    if (type == 'Students'){
        if (people >= 30){
            if (dayOfWeek == 'Friday') {
                console.log(`Total price: ${(people * 8.45 * 0.85).toFixed(2)}`)
            } else if (dayOfWeek == 'Saturday') {
                console.log(`Total price: ${(people * 9.8 * 0.85).toFixed(2)}`)
            } else if (dayOfWeek == 'Sunday') {
                console.log(`Total price: ${(people * 10.46 * 0.85).toFixed(2)}`)
            }

        } else {
            if (dayOfWeek == 'Friday') {
                console.log(`Total price: ${(people * 8.45).toFixed(2)}`)
            } else if (dayOfWeek == 'Saturday') {
                console.log(`Total price: ${(people * 9.8).toFixed(2)}`)
            } else if (dayOfWeek == 'Sunday') {
                console.log(`Total price: ${(people * 10.46).toFixed(2)}`)
            }
        }
    } else if (type == 'Business') {
        if (people >= 100) {
            if (dayOfWeek == 'Friday') {
                console.log(`Total price: ${((people - 10) * 10.90).toFixed(2)}`)
            } else if (dayOfWeek == 'Saturday') {
                console.log(`Total price: ${((people - 10) * 15.6).toFixed(2)}`)
            } else if (dayOfWeek == 'Sunday') {
                console.log(`Total price: ${((people - 10) * 16).toFixed(2)}`)
            }
        } else {
            if (dayOfWeek == 'Friday') {
                console.log(`Total price: ${(people * 10.9).toFixed(2)}`)
            } else if (dayOfWeek == 'Saturday') {
                console.log(`Total price: ${(people * 15.6).toFixed(2)}`)
            } else if (dayOfWeek == 'Sunday') {
                console.log(`Total price: ${(people * 16).toFixed(2)}`)
            }
        }
    } else if (type == 'Regular') {
        if (people >= 10 && people <= 20) {
            if (dayOfWeek == 'Friday') {
                console.log(`Total price: ${(people * 15 * 0.95).toFixed(2)}`)
            } else if (dayOfWeek == 'Saturday') {
                console.log(`Total price: ${(people * 20 * 0.95).toFixed(2)}`)
            } else if (dayOfWeek == 'Sunday') {
                console.log(`Total price: ${(people * 22.5 * 0.95).toFixed(2)}`)
            }
        } else {
            if (dayOfWeek == 'Friday') {
                console.log(`Total price: ${(people * 15).toFixed(2)}`)
            } else if (dayOfWeek == 'Saturday') {
                console.log(`Total price: ${(people * 20).toFixed(2)}`)
            } else if (dayOfWeek == 'Sunday') {
                console.log(`Total price: ${(people * 22.5).toFixed(2)}`)
            }
        }
    }
}
vacation(30,"Students","Sunday")
vacation(40, "Regular", "Saturday")


// 5. Leap Year
function leap(num){
    if ((num % 4 == 0 && num % 100 != 0) || num % 400 == 0) {
        console.log('yes')
    } else {
        console.log('no')
    }
}
leap(1984);
leap(203);
leap(4);
leap(2000);


// 6. Print and Sum
function print(num1, num2){
    let sum = 0;
    let numbers = '';
    for(let i = num1; i <= num2; i++){
        sum += i;
        numbers += i + ' ';

    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
print(5,10);
print(0,26);
print(50,60);


// 7. Triangle of Numbers
function triangle(num){
    for(let i = 1; i <= num; i++){
        let print = '';
        for (let j = 1; j <= i; j++){
            print += i + ' ';
        }
        console.log(print);
    }
}
triangle(3);
triangle(5);
triangle(6);


// 8. Multiplication Table
function multi(num){
    for (let i = 1; i <= 10; i++){
        let result = num * i;
        console.log(`${num} X ${i} = ${result}`);
    }
}
multi(5);
multi(2);


// 9. Login
function login(array){
    let userName = array[0];
    let splitString = userName.split('');
    let reverseArray = splitString.reverse();
    let password = reverseArray.join('');
    for (let i = 1; i <= array.length; i++){
        if (password === array[i] && i <=4){
            console.log(`User ${userName} logged in.`);
            return;
        }
        if (i >4 ){
            console.log(`User ${userName} blocked!`);
            return;
        }
        if (password !== array[i] && i <=3) {
            console.log('Incorrect password. Try again.');

        }
    }
}
login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny'])




















