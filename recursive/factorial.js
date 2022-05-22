
//!5 = 1*2*3*4*5
function factorialIterative(number) { // O(n)
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorialIterative(1));
console.log(factorialIterative(2));
console.log(factorialIterative(4));
console.log(factorialIterative(5));

function factorialRecursive(number) { // O(n)
    if (number === 1) {
        return 1;
    }
    return number * factorialRecursive(number - 1);
}

console.log(factorialRecursive(1));
console.log(factorialRecursive(2));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));