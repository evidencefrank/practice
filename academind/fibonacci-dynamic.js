function fib(n, memory) {
    // 1 1 2 3 5 8 13 21 ...
    if (memory[n]) {
        return memory[n];
    }

    let result;
    if (n === 0 || n === 1) {
        result = 1;
    } else {
        result = fib(n - 2, memory) + fib(n - 1, memory);
    }
    memory[n] = result;
    return result;
}

console.log(fib(4, {})); //5
console.log(fib(5, {})); //8
console.log(fib(6, {})); //13

//O(n)