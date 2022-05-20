function findMissing(input) {
    //calculate sum of all elements in the input array
    let sum = 0;
    for (number of input) {
        sum += number;
    }

    let length = input.length + 1;

    let actual_sum = (length * (length + 1)) / 2;

    return actual_sum - sum;

}


console.log(findMissing([1, 3, 4, 5]));

//Time Complexity = O(n)
//Space Complexity = O(1)