function map(array, callback) {
    //add your code here
    if (!Array.isArray(array) && array.length > 0) {
        return -1;
    }

    const newArray = [];

    for (const item of array) {
        newArray.push(callback(item))
    }

    return newArray;
}

const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
console.log(mappedArray);
// [2, 4, 6, 8, 10];