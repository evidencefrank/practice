//Merge Sort
//split array multiple times until we have only 2-element arrays left
//-> sort those arrays and merge them back together.

function sort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    if (arr.length === 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);

    console.log(leftArray);
    console.log(rightArray);
    return;

    const leftSortedArray = sort(leftArray);
    const rightSortedArray = sort(rightArray);

    const mergedArr = [];
    let leftArrIndex = 0;
    let rightArrIndex = 0;
    while (leftArrIndex < leftSortedArray.length || rightArrIndex < rightSortedArray.length) {
        if (leftArrIndex >= leftSortedArray.length || leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]) {
            mergedArr.push(rightSortedArray[rightArrIndex]);
            rightArrIndex++;
        } else {
            mergedArr.push(leftSortedArray[leftArrIndex]);
            leftArrIndex++;
        }
    }

    return mergedArr;
}

const arr = [5, 10, -3, -10, 1, 100, 99];

console.log(sort(arr));

//Time Complexity
//Best Case => (all items already sorted) => O(n * log(n))
//Average Case => O(n * log(n))
//Worst Case => (all items sorted in reverse order) => O(n * log(n))

//Master Theorem
// a = the number of subproblems (number of recursion splits)
// b = the relative subproblem size (input reduction per split)

//Recursive Step Runtime: O (n^logb(a)) => O(n ^ log2(2)) => O(n^1) => O(n)
//Runtime outside of the recursion: O(n)

//Linear Space Complexity = O(n)