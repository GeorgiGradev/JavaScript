function solution(x){
    return function (y) {
        return x + y;
    }
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
