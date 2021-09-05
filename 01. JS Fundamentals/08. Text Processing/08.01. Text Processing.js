// 01. Print Characters
function print(input){
    for (const iterator of input) {
        console.log(iterator)
    }
}
//print('AWord')


// 02. Substring
function substring(text, index, count){
    let result = text.substr(index, count)
    console.log(result)
}
//substring("ASentance", 1, 8)


// 03. Censored Words
function repeat(text, word){
    let length = word.length;
    while (text.includes(word)){
        text = text.replace(word,'*'.repeat(length))
    }
    console.log(text);
}
//repeat("A small sentence with some words", "small")


// 04. Count String Occurrences
