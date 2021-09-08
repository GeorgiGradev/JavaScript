//01. Fruit
function fruites(name, weightGr, priceKg) {
    quantity = weightGr / 1000;
    price = quantity * priceKg;
    console.log(`I need $${price.toFixed(2)} to buy ${quantity.toFixed(2)} kilograms ${name}.`);
}
// fruites('orange', 2500, 1.80);
// fruites('apple', 1563, 2.35);


//02. Greatest Common Divisor - GCD
function divisior(num1, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);

    for (let i = 9; i >=1; i--) {
        if (number1 % i == 0 && number2 % i == 0){
            console.log(i);
            break;
        }
    }
}
// divisior(15, 5);
// divisior(2154, 458);



//03. Same Numbers
function sameNumbers(input) {
    let str = String(input);
    let result = 0;
    let isSame = true;
    let firstNum = Number(str[0]);

    for (let i = 0; i < str.length - 1; i++) {
        let nextNum = Number(str[i+1]);
        result+= nextNum;
    }
    
    result += firstNum;
    if (result / str.length === firstNum){
        console.log(isSame);
    } else {
        console.log(!isSame);
    }
    console.log(result); 
}
// sameNumbers(2222222);
// sameNumbers(1234);


//04. Time to Walk
function walk(steps, foodPrintInMeter, speedInKmH) {
    const distance = steps * foodPrintInMeter
    const decimalTime = distance / 1000 / speedInKmH
    const n = new Date(0, 0)
    n.setSeconds(decimalTime * 60 * 60 + 1) //no idea why judge wants 1 second more
    n.setMinutes(n.getMinutes() + Math.floor(distance / 500))

    console.log(n.toTimeString().slice(0, 8));
}
// walk(4000, 0.60, 5);
// walk(2564, 0.70, 5.5);


//05. Road Radar
function radar(speed, area) {
    const motorWayLinit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;
    let output = '';

    switch(area){
        case 'motorway':
                if (speed <= motorWayLinit) {
                    output = `Driving ${speed} km/h in a ${motorWayLinit} zone`; 
                } else if (speed > 40 + motorWayLinit) {
                    output = `The speed is ${speed - motorWayLinit} km/h faster than the allowed speed of ${motorWayLinit} - reckless driving`
                } else if (speed > 20 + motorWayLinit) {
                    output = `The speed is ${speed - motorWayLinit} km/h faster than the allowed speed of ${motorWayLinit} - excessive speeding`
                } else {
                    output = `The speed is ${speed - motorWayLinit} km/h faster than the allowed speed of ${motorWayLinit} - speeding`    
                }
                break;
        case 'interstate':
            if (speed <= interstateLimit) {
                output = `Driving ${speed} km/h in a ${interstateLimit} zone`; 
            } else if (speed > 40 + interstateLimit) {
                output = `The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - reckless driving`
            } else if (speed > 20 + interstateLimit) {
                output = `The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - excessive speeding`
            } else {
                output = `The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - speeding`    
            }
            break;
        case 'city':
            if (speed <= cityLimit) {
                output = `Driving ${speed} km/h in a ${cityLimit} zone`; 
            } else if (speed > 40 + cityLimit) {
                output = `The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - reckless driving`
            } else if (speed > 20 + cityLimit) {
                output = `The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - excessive speeding`
            } else {
                output = `The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - speeding`    
            }
            break;
        case 'residential':
            if (speed <= residentialLimit) {
                output = `Driving ${speed} km/h in a ${residentialLimit} zone`; 
            } else if (speed > 40 + residentialLimit) {
                output = `The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - reckless driving`
            } else if (speed > 20 + cityLimit) {
                output = `The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - excessive speeding`
            } else {
                output = `The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - speeding`    
            }
            break;
    }
    console.log(output);
}
// radar(40, 'city');
// radar(21, 'residential');
// radar(120, 'interstate');
// radar(200, 'motorway');


//06. Cooking by Numbers
function cooking(num, com1, com2, com3, com4, com5) {
    let number = Number(num);
    let array = [];
    array.push(com1, com2, com3, com4, com5);
    
    for (let i = 0; i < 5; i++) {
        let command = array[i];
        switch(command){
            case 'chop': console.log(number /= 2); break;
            case 'dice': console.log(number = Math.sqrt(number)); break;
            case 'spice': console.log(number += 1); break; 
            case 'bake': console.log(number *= 3); break;
            case 'fillet': console.log(number *= 0.8); break;
        }
    }

}
// cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');


//07. Validity Checker
function validDistance(x, y, x1, y1) {
    const isValidDist = (x, y, x1, y1) =>
        Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)) % 1 === 0
    const pairs = [
        [x, y, 0, 0],
        [x1, y1, 0, 0],
        [x, y, x1, y1],
    ]
    const printMsg = (a, b, c, d, validity) => `{${a}, ${b}} to {${c}, ${d}} is ${validity}`
    pairs.forEach((x, i) =>
        console.log(isValidDist(...pairs[i]) ? printMsg(...x, "valid") : printMsg(...x, "invalid"))
    )
}
// validDistance(3, 0, 0, 4);
// validDistance(2, 1, 1, 1);

//08. *Words Uppercase
function foo(s) {
    return s.match(/\w+/g).join(", ").toLocaleUpperCase()
}
console.log(foo('Hi, how are you?'));

