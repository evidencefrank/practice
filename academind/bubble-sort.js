//Bubble sort 
// Compare two items at a time and sort them. Go through the entire array multiple times untill all pairs were compared and sorted.

function sort(arr) {
    const resultArray = [...arr];

    for (let outer = 0; outer < resultArray.length; outer++) {
        let outerEl = resultArray[outer];
        for (let inner = outer + 1; inner < resultArray.length; inner++) {
            let innerEl = resultArray[inner];

            if (outerEl > innerEl) {
                resultArray[outer] = innerEl;
                resultArray[inner] = outerEl;

                outerEl = resultArray[outer];
                innerEl = resultArray[innerEl];
            }
        }
    }
    return resultArray;
}

const arr = [5, 10, -3, -10, 1, 100, 99];

console.log(sort(arr));

//Time Complexity
//Best Case => (all items already sorted) => O(n)
//Average Case => O(n^2)
//Worst Case => (all items sorted in reverse order) => O(n^2)

//Constant Space Complexity => O(1)