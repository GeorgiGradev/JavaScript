function solution(){
    let str = ''

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(input){
        str += input;
    }
    function removeStart(n){
       str =  str.substring(n)
    }
    function removeEnd(n){
       str = str.substring(0, str.length - n)
    }
    function print(){
        console.log(str);
    }
}


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
