
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
function fibonacciIterative(number) { // O(n)
    if (number === 0) {
        return 0;
    }
    var result = 1;
    var lastNumber = 0;
    var temp = 0;
    for( var i = 1; i < number; i++) {
        temp = result;
        result = result + lastNumber;
        lastNumber = temp;
    }

    return result;
}

console.log(fibonacciIterative(1));
console.log(fibonacciIterative(5));
console.log(fibonacciIterative(8));

function fibonacciRecursive(number) { // O(2^n) exponential increase
    if (number < 2) {
        return number;
    }
    return  fibonacciRecursive(number-1) + fibonacciRecursive(number-2)
}

console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(8));
