 //01. Match Full Name
 function solve(input){
     let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
     let result = [];

     let match = pattern.exec(input);

     while(match != null){
         result.push(match[0]);
         match = pattern.exec(input);
     }
     console.log(result.join(' '))
 }
 solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")

 // 02. Match Phone Number
function phone(input){
    let pattern = /(\+359-2-[\d]{3}-[\d]{4}\b)|(\+359 2 [\d]{3} [\d]{4}\b)/g
    let result = [];

    let match = pattern.exec(input);

    while (match != null){
        result.push(match[0]);
        match = pattern.exec(input);
    }

    console.log(result.join(', '));
}
phone("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")
