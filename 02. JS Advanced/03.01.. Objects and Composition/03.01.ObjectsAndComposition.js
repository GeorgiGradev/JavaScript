//01. City Record
function getCity(name, population, treasury) {
    let object = {
        name,
        population,
        treasury
    };
    return object;
}
// console.log(getCity('Tortuga',
// 7000,
// 15000
// ));
// console.log(getCity('Santo Domingo',
// 12000,
// 23500
// ));


//02. Town Population
function getPopulation(input) {
    let object = {};
    for (const iterator of input) {
        let parsed = iterator.split(' <-> ');

        if (object[parsed[0]] != undefined) {
            object[parsed[0]] += Number(parsed[1])
        } else {
            object[parsed[0]] = Number(parsed[1]);
        }
    }
    let array = []
    for (const [key, value] of Object.entries(object)) {
        array.push(`${key} : ${value}`);
    }
    return array.join('\n');
}
// console.log(getPopulation(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']
// ));
// console.log(getPopulation(['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']
// ));


//03. City Taxes
function getCityTaxes(name, population, treasury) {
    return {
        name, population, treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        },
    };
}

// const city = getCityTaxes('Tortuga', 7000, 15000);
// console.log(city)
// city.applyGrowth(20);
// console.log(city)


//04. Object Factory
function factory(library, orders) {
    const result = [];
    for (const order of orders) {
        const composed = Object.assign({}, order.template);
        for (const part of order.parts) {
            composed[part] = library[part]
        }
        result.push(composed);
    }

    return result;
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];
// const products = factory(library, orders);
// const player = products[3];
// player.play('Michael Jackson', 'Bad');


//05.Assembly Line
function createAssemblyLine() {
    result = {};
    result.hasClima = (car) => {
        car.temp = 21;
        car.tempSettings = 21;
        car.adjustTemp = () => {
            if (car.temp < car.tempSettings) {
                car.temp++;
            } else if(car.temp > car.tempSettings) {
                car.temp--;
            }
        }
    }
    result.hasAudio = (car) => {
        car.currentTrack = {
            name: null,
            artist: null,
        }
        car.nowPlaying = () => {
            if (car.currentTrack.name !== null){
                console.log(`Now playing ${car.currentTrack.name} by ${car.currentTrack.artist}`);
            }
        }
    }
    result.hasParktronic = (car) => {
        car.checkDistance = (distance) => {
            if (distance < 0.1){
                console.log('Beep! Beep! Beep!');
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log('Beep! Beep!');
            } else if (distance >= 0.25 && distance < 0.5) { 
                console.log('Beep!');
            } else {
                console.log('');
            }
        }
    }
    return result;
}

// const assemblyLine = createAssemblyLine();

// const myCar = {
//     make: 'Toyota',
//     model: 'Avensis'
// };

// assemblyLine.hasClima(myCar);
// console.log(myCar.temp);
// myCar.tempSettings = 18;
// myCar.adjustTemp();
// console.log(myCar.temp);

// assemblyLine.hasAudio(myCar);
// myCar.currentTrack = {
//     name: 'Never Gonna Give You Up',
//     artist: 'Rick Astley'
// };
// myCar.nowPlaying();

// assemblyLine.hasParktronic(myCar);
// myCar.checkDistance(0.4);
// myCar.checkDistance(0.2);

// console.log(myCar);



//06. From JSON to HTML Table
function fromJSONToHTMLTable(input) {

    let symbolsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        '\'': '&#39;'
    };

    function escapeSymbols(text) {
        return text
            .split("&").join(symbolsToReplace["&"])
            .split("<").join(symbolsToReplace["<"])
            .split(">").join(symbolsToReplace[">"])
            .split("\"").join(symbolsToReplace["\""])
            .split("\'").join(symbolsToReplace["'"])
    }

    let table = []
    table.push('<table>')

    let parsedObject = JSON.parse(input)
    let objectProperties = Object.keys(parsedObject[0])

    function aggregateTableHeading(properties) {
        return properties
            .map(p => `<th>${p}</th>`)
            .reduce((a, b) => {
                a.push(b)
                return a;
            }, ['  <tr>'])
            .join('')
            + '</tr>'
    }

    table.push(aggregateTableHeading(objectProperties))

    function aggregateTableRow(obj) {

        return Object.keys(obj)
            .reduce((a, b) => {
                a.push(`<td>${isNaN(obj[b]) ? escapeSymbols(obj[b]) : obj[b]}</td>`)
                return a;
            }, ['  <tr>'])
            .join('')
            + '</tr>'
    }

    parsedObject
        .map(o => aggregateTableRow(o))
        .forEach(r => table.push(r))
    table.push('</table>')

    return table.join('\n');

}

fromJSONToHTMLTable([{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]
)