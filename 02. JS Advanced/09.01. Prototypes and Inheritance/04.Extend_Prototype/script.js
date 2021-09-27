class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');

    }

    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}

function extendProperty(Class) {
    Class.prototype.species = "Human";
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}


let p = new Person('Alex','Nest');

extendProperty(Person);

console.log(p.toSpeciesString());