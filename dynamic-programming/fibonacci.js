let operations = 0;
function fibonacci(n) {
    operations++;
    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7), operations);

let operationsMemo = 0;

function memoizedFibonacci() {
    let cache = {};
    return function fibonacci(n) {
        operationsMemo++
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                cache[n] = n;
            }else {
                cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
            }

            return cache[n];
        }
    }
}

memo = memoizedFibonacci();
console.log(memo(7), operationsMemo);
