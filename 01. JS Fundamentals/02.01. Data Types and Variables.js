// 01. Concatenate Names
function solve(input1, input2, input3){
    console.log(`${input1}${input3}${input2}`);
}
solve('John',
    'Smith',
    '->'
);

solve('Jan',
    'White',
    '<->'
);


// 02. Right Place
function solve(input1, input2, input3){
    let result = input1.replace('_', input2);
    let output = result === input3 ? 'Matched' : 'Not Matched';
    console.log(output);
}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');










