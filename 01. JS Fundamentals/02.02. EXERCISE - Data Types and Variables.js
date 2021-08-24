// 01. Sum Digits
function solve(input){
    let text = input.toString();
    let sum = 0;
    for (let i = 0; i < text.length; i++){
        let number = Number(text[i]);
        sum += number;
    }
    console.log(sum);
}
solve(245678);
solve(97561);
solve(543);


//02. Chars to String
function solve(p1, p2, p3){
    console.log(p1+p2+p3);
}
solve('a',
    'b',
    'c'
)


// 03. Town Info
function solve(town, population, area){
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`)
}
solve('Sofia',
    1286383,
    492
)


// 04. Convert Meters to Kilometres
function solve(input){
    let number = Number(input);
    console.log((number / 1000).toFixed(2));
}
// solve(1852);

// 05.Convert Meters to Kilometres
function solve(input){
    let number = Number(input);
    console.log((number * 1.31).toFixed(3));
}
solve(80);


// 06. Reversed Chars
function solve(c1, c2, c3){
    console.log(c3 + ' ' + c2 + " " + c1);
}
solve('A',
    'B',
    'C'
)


// 07. Lower or Upper
function solve(letter){
    if (letter.charCodeAt(0) > 97) {
        console.log('lower-case');
    } else {
        console.log('upper-case');
    }
}
solve('L');
solve('f');













