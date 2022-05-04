//Quick Sort
// use pivot elements to split array into smaller chunks - elements bigger, smaller and equal than the pivot element. Repeat that process for all chunks and concat the sorted chunks.

//it uses recursion to sort the array.

function sort(arr) {
    const resultArray = [...arr];

    if (resultArray.length <= 1) {
        return resultArray;
    }

    const smallerElementsArray = [];
    const biggerElementsArray = [];
    const pivotElement = resultArray.shift();
    const centerElementsArray = [pivotElement];

    while (resultArray.length) {
        const currentElement = resultArray.shift();

        if (currentElement === pivotElement) {
            centerElementsArray.push(currentElement);
        } else if (currentElement < pivotElement) {
            smallerElementsArray.push(currentElement);
        } else {
            biggerElementsArray.push(currentElement)
        }
    }
    const smallerElementsSortedArray = sort(smallerElementsArray);
    const biggerElementsSortedArray = sort(biggerElementsArray);

    return smallerElementsSortedArray.concat(
        centerElementsArray,
        biggerElementsSortedArray
    )
}

const arr = [5, 10, -3, -10, 1, 100, 99];

console.log(sort(arr));

//Time Complexity
//Best Case => items are sorted randomly (NOT in right or wrong order) = O(n * log(n))
//Average Case => Oitems are sorted randomly (NOT in right or wrong order) = O(n * log(n))
//Worst Case => the array is in reverse order => O(n^2)

//Master Theorem
// a = the number of subproblems (number of recursion splits)
// b = the relative subproblem size (input reduction per split)

//Recursive Step Runtime: O (n^logb(a)) => O(n ^ log2(2)) => O(n^1) => O(n)
//Runtime outside of the recursion: O(n)

//Linear Space Complexity = O(n)