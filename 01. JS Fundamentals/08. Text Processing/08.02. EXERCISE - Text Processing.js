//01. Reveal Words
function reveal(words, template){
    let wordsAray = words.split(", ");
    let templateArray = template.split(' ');
    
    for (const word of wordsAray) {
        let length = word.length;
        for (const stars of templateArray) {
            if (stars.includes('*') && stars.length === length){
                let foundIndex = templateArray.indexOf(stars);
                templateArray[foundIndex] = word;
             
            }
        }
    }
    console.log(templateArray.join(' '))
}
// reveal('great',
// 'softuni is ***** place for learning new programming languages'
// );
// reveal('great, learning',
// 'softuni is ***** place for ******** new programming languages'
// )


//02. Modern Times of #(HashTag)
function solve(str) {
    str.match(/#[a-zA-Z]+/g).forEach(x => { console.log(x.slice(1)) })
}
//solve('Nowadays everyone uses # to tag a #special word in #socialMedia')


// 03. Extract File
function solve(str) {
    const match = str.substring(str.lastIndexOf('\\') + 1)
    const name = match.substring(0, match.lastIndexOf('.'))
    const extension = match.substring(match.lastIndexOf('.') + 1)

    console.log(`File name: ${name}
File extension: ${extension}`)
}
// solve('C:\\Internal\\training-internal\\Template.pptx')


// 04. String Substring
function solve(str1, str2) {
    const sentence = str2.split(' ').map(x => x.toLocaleLowerCase());
    if (sentence.includes(str1.toLocaleLowerCase())) {
        return str1
    }
    console.log(`${str1} not found!`)
}
solve('javascript',
'JavaScript is the best programming language'
)