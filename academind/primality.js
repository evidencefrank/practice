//Determine whether an input number is a prime number
//A prime number is a number which can only be divided by 1 and itself without leaving a remainder
//eg isPrime(9) = false; 
//   isPrime(5) = true;

function isPrime(n) {

    if (n === null || n === undefined) return -1;

    if (n === 0 || n === 1) return false;

    //eg. 2, 3, 5, 7, 11, 13 ...

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}


//Best Case: number =  1 Or number = 2 => 0(1)
//Average Case: 0 (n)
//Worst Case:  number = 27 277 => 0 (n)


//Primality Test - Improved

function isPrimeImproved(n) {

    // Check if number is integer.
    if (number % 1 !== 0) {
        return false;
    }

    if (number <= 1) {
        // If number is less than one then it isn't prime by definition.
        return false;
    }

    if (number <= 3) {
        // All numbers from 2 to 3 are prime.
        return true;
    }

    // If the number is not divided by 2 then we may eliminate all further even dividers.
    if (number % 2 === 0) {
        return false;
    }

    // If there is no dividers up to square root of n then there is no higher dividers as well.
    const dividerLimit = Math.sqrt(number);
    for (let divider = 3; divider <= dividerLimit; divider += 2) {
        if (number % divider === 0) {
            return false;
        }
    }

    return true;

}

//Best Case: number =  1 Or number = 2 => 0(1)
//Average Case: 0 (sqrt(n))
//Worst Case:  number = 27 277 => 0 (sqrt(n))

console.log(isPrime(5)); //true
console.log(isPrime(9)); //false

console.log(isPrimeImproved(5)); //true
console.log(isPrimeImproved(9)); //false