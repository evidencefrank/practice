function fib(n) {
    if (n === null) {
        return -1;
    }
    // fib = [1, 1, 2, 3, 5, 8, 13,...]
    if (n === 0 || n === 1) return 1;

    const fib_series = [1, 1];

    for (let i = 2; i < n + 1; i++) {
        fib_series.push(fib_series[i - 2] + fib_series[i - 1]);
    }

    return fib_series[n];
}

console.log(fib(4)); //5
console.log(fib(5)); //8
console.log(fib(6)); //13
console.log(fib(7)); //21

//O(n) = Linear Time Complexity