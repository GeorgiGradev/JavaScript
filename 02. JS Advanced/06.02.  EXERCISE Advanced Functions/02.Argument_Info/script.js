function solve(...args) {
    let occurrences = {};
    let output =[];

    for (const element of args) {
        let type = typeof(element);
        let value = element;
        output.push(`${type}: ${value}`);
        occurrences[type] = occurrences[type] ? occurrences[type] + 1 : 1
    }

    output.forEach(x => console.log(x))

   Object.keys(occurrences)
   .sort((a,b) => occurrences[b] - occurrences[a])
   .forEach(x => console.log(`${x} = ${occurrences[x]}`))
}
solve('cat', 42, 25, 37, function () { console.log('Hello world!'); }) 