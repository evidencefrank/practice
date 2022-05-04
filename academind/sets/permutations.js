//Without Repetitions

//Recursive

// function getPermutations(options) {
//     const permutations = [];

//     if (options.length === 1) {
//         return [options];
//     }

//     const partialPermutations = getPermutations(options.slice(1));

//     const firstOption = options[0];

//     for (let i = 0; i < partialPermutations.length; i++) {
//         const partialPermutation = partialPermutations[i];

//         for (let j = 0; j <= partialPermutation.length; j++) {
//             const permutationInFront = partialPermutation.slice(0, j);
//             const permutationAfter = partialPermutation.slice(j);
//             permutations.push(permutationInFront.concat([firstOption], permutationAfter))
//         }
//     }

//     return permutations;
// }

// const todoListItems = ['walk the dog', 'clean the toilet', 'buy groceries', 'order food'];

//console.log(getPermutations(todoListItems));

//Factorial Time Complexity => O(n!) => horrible


//With Repetition
function getPermutations(options, length) {
    const permutations = [];

    if (length === 1) {
        return options.map(option => [option]);
    }
    const partialPermutations = getPermutations(options, length - 1);

    for (const option of options) {
        for (const existingPermutation of partialPermutations) {
            permutations.push([option].concat(existingPermutation))
        }
    }

    return permutations;
}

const digits = [1, 2, 3];

const resultLength = 3;

console.log(getPermutations(digits, resultLength));

// Time Complexity => O(n^r) where n is the number of options, r is the length
//