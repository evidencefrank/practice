function findElement(sortedArr, element, offset) {

    console.log(sortedArr, element);

    let startIndex = 0;
    let endIndex = sortedArr.length - 1;


    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArr[middleIndex]) {
        return middleIndex + offset;
    }

    if (sortedArr[middleIndex] < element) {
        startIndex = middleIndex + 1;
        offset = offset + middleIndex + 1;
    } else {
        endIndex = middleIndex;
    }

    return findElement(sortedArr.slice(startIndex, endIndex + 1), element, offset);

}

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 99, 0));

//Time Complexity
//Best Case = O(1)
//Average Case = O(log(n))
//Worst Case = O(log(n)) => because we are splitting the array in half in every iteration