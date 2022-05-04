function findElement(arr, element, comparatorFn) {
    let index = 0
    for (const item of arr) {
        if (typeof element === 'object' && element !== null && comparatorFn(element, item)) {
            return index
        }
        if (item === element) {
            return index;
        }
        index++;
    }
}

const arr = [5, 3, 10, -10, 44, 51];

const persons = [{
        name: 'Evidence',
        age: '28',
    },
    {
        name: 'John',
        age: '30'
    }
];

console.log(findElement(arr, 10));

console.log(findElement(persons, { name: 'John', age: '30' }, function(el, it) {
    return el.name === it.name && el.age === it.age
}));


//Time Complexity
//Best Case O(1)
//Average Case O(n)
//Worst Case O(n)

//Linear search works on both Ordered and Unordered Lists
//Binary search works only on ordered lists


//Constant Space Complexity => O(1)