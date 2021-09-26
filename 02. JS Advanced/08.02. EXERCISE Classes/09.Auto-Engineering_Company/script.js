function solve(input) {
    let brands = new Map();

    for (const element of input) {
        let [brandName, modelName, quantity] = element.split(' | ');
        quantity = Number(quantity);

        if (!brands.has(brandName)) {
            brands.set(brandName, new Map());
        } 

        if (!brands.get(brandName).has(modelName)) {
            brands.get(brandName).set(modelName, 0);
        }

        let value = brands.get(brandName).get(modelName);
        brands.get(brandName).set(modelName, value + quantity);
    }
    
    for (const [brandname, map] of brands) {
        console.log(brandname);
        for (const [modelName, quantity] of map) {
            console.log(`###${modelName} -> ${quantity}`);
        }
    }

}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);





// console.log(solve(['Audi | Q7 | 1000',
// 'Audi | Q6 | 100',
// 'BMW | X5 | 1000',
// 'BMW | X6 | 100',
// 'Citroen | C4 | 123',
// 'Volga | GAZ-24 | 1000000',
// 'Lada | Niva | 1000000',
// 'Lada | Jigula | 1000000',
// 'Citroen | C4 | 22',
// 'Citroen | C5 | 10']
// ));
