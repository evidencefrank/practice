function factorial(number) {
    if (number === null || number === undefined || number < 0) return -1;

    if (number === 0) return 1;

    // factorial(3) = 3 * 2 * 1 = 6
    let result = 1;
    for (i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(3)); //6
console.log(factorial(5)); //120
console.log(factorial(7)); //5040

//O(n) = Linear Time Complexity
//O(1) = 0(1) = Constant Space Complexity => because we operate on one and the same number, no new ("permanent") value is created per iteration


function fact(n) {
    if (n <= 1) {
        return 1;
    }

    return n * fact(n - 1);
}

//In every function call => O(1)
// But we trigger multiple function calls => n function calls
//T = n * O(n) => O(n) => Linear Time Complexity

//O(n) => Linear Space Complexity => because a new number is created per function call