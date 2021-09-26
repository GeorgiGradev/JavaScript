class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;
    }
    decrease(length){
        if (length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength = this.innerLength - length < 0 ? 0 :  this.innerLength - length;  
        }
    }
    toString(){
        let dots = '...';
        if (this.innerLength <= 0) {
            return dots;
        } else if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        }  else  {
            let result = '';
            let output = this.innerString.slice(0, this.innerLength);
            return output + dots;
        }
    }

}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
