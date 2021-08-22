// 01. Multiply Number by 2
function solve(num){
    console.log(num * 2);
}
solve(2);
solve(5)


// 02.Excellent Grade
function grade(num){
    if(num >= 5.5){
        console.log('Excellent')
    }
    else{
        console.log('Not excellent');
    }
}
grade(5);
grade(5.6);


// 03. Numbers from 1 to 5
function numbers1to5(){
    for (let i = 1; i <= 5; i++){
        console.log(i);
    }
}
numbers1to5();

// 04. Numbers from N to 1
 function solve(num){
     while(num > 0){
         console.log(num);
         num--;
     }
 }
solve(5);


// 05. Numbers from M to N
function solve(num1, num2){
    while(num1 >= num2){
        console.log(num1);
        num1--;
    }
}
solve(6,2);


// 06. Student Information
function student(name, age, grade){
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
student('John', 15, 5.54678)


// 07. Month Printer
function printer(num){
    switch (num){
        case 1:
            console.log('January');
            return;
        case 2:
            console.log('February');
            return;
        case 3:
            console.log('March');
            return;
        case 4:
            console.log('April');
            return;
        case 5:
            console.log('May');
            return;
        case 6:
            console.log('June');
            return;
        case 7:
            console.log('July');
            return;
        case 8:
            console.log('August');
            return;
        case 9:
            console.log('September');
            return;
        case 10:
            console.log('October');
            return;
        case 11:
            console.log('November');
            return;
        case 12:
            console.log('December');
            return;
        default:
            console.log('Error!');
            return;
    }
}
printer(1);
printer(9);
printer(113);


// 08.Foreign Languages
function country(country){
    if(country === 'USA' || country === "England"){
        console.log('English');
    } else if (country === "Spain" || country === "Mexico" || country === 'Argentina'){
        console.log("Spanish")
    } else {
        console.log("unknown")
    }
}
country("USA");
country("Mexico");
country("Germany");


// 09. Theatre Promotions
function promotions(weekday,age){
    if ((weekday === 'Weekday') && (age >= 0 && age <= 18)){
        console.log(`${12}$`);
    } else if ((weekday === 'Weekend') && (age >= 0 && age <= 18)){
        console.log(`${15}$`);
    } else if ((weekday === 'Holiday') && (age >= 0 && age <= 18)){
        console.log(`${5}$`);
    } else if ((weekday === 'Weekday') && (age > 18 && age <= 64)){
        console.log(`${18}$`);
    } else if ((weekday === 'Weekend') && (age > 18 && age <= 64)){
        console.log(`${20}$`);
    } else if ((weekday === 'Holiday') && (age > 18 && age <= 64)){
        console.log(`${12}$`);
    }else if ((weekday === 'Weekday') && (age > 64 && age <= 122)){
        console.log(`${12}$`);
    } else if ((weekday === 'Weekend') && (age > 64 && age <= 122)){
        console.log(`${15}$`);
    } else if ((weekday === 'Holiday') && (age > 64 && age <= 122)){
        console.log(`${10}$`);
    } else {
        console.log('Error!')
    }
}
promotions('Weekday', 42);
promotions('Holiday', -12);
promotions('Holiday', 15);


// 10. Divisible by 3
function devisible(){
    for (let i = 1; i <=100; i++){
        if (i % 3 == 0){
            console.log(i);
        }
    }
}
devisible();

// 11. Sum of Odd Numbers
function oddNumbers(num){
    let sum = 0;
    let odd = 1;
    for(let i = 1; i <= num; i++){
        if (odd % 2 != 0){
            console.log(odd)
            sum += odd;
        }
        odd+=2;
    }
    console.log(`Sum: ${sum}`);
}
oddNumbers(5);
oddNumbers(3);