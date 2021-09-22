function solve(arr, start, end) {
    if (start < 0){
        start = 0;
    }
    if (end > arr.length - 1){
        end = arr.length - 1
    }
    if (Array.isArray(arr) == false)
    {
        return NaN
    }
    return arr.slice(start, end + 1).reduce((acc, el) => acc + Number(el), 0);
}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2))