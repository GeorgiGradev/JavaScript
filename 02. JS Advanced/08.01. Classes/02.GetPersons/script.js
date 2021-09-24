
function getPersons(){
    class Person {
        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email; 
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    
    let obj1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let obj2 = new Person('SoftUni');
    let obj3 = new Person('Stephan', 'Johnson', 25);
    let obj4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    return [obj1, obj2, obj3, obj4];
}
console.log(getPersons().join(" "));