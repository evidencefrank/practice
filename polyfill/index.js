//Polyfill : 
//1. is a piece of code usually written in javascript used to provide modern functionality into older browsers that do not natively support it

//2. is a browser fallback, made in JS, that allows allows functionality that you expect to work in modern browsers to work in older browsers eg. canvas ,es6

//babel is polyfill (Transcompiler)

//**** Map, Filter, Reduce

var cities = [
    "New Delhi",
    "Jaipur",
    "Noida",
    "Rohtak"
]

//var result = cities.map(c => console.log(c));

//For writing the polyfill for the map function we have to use the JS prototype
//Prototype is used to enhance the functionality of the existing methods

//Map
Array.prototype.myMap = function(callback) { //returns a new array
    var finalArray = [];
    for (var i = 0; i < this.length; i++) {
        finalArray.push(callback(this[i], i, this))
    }
    return finalArray;
}

//var result = cities.myMap(c => console.log(c));

//Filter

var ages = [34, 23, 54, 6, 34, 12];

var result = ages.filter(age => age > 10);

//console.log(result);

Array.prototype.myFilter = function(callback, context) {
    var finalArray = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            finalArray.push(this[i])
        }
    }
    return finalArray;
}

var finalResult = ages.myFilter(function(x) {
    return x > 23;
});

//console.log(finalResult);


//Reduce

//reduce((accumulator, currentValue, index, array) => {}, initialValue)

const nums = [10, 20];

var result = nums.reduce((total, value) => total + value, 1);

//console.log(result);

const users = [
    { name: 'John', age: 34 },
    { name: 'Mehdi', age: 19 },
    { name: 'Alex', age: 10 },
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);

//console.log(sumOfAges); //63

Array.prototype.myReduce = function(fn, initial) {
    let values = this;

    values.forEach(item => {
        initial = initial !== undefined ? fn(initial, item) : item
    })
    return initial;
}

var values = [2, 3, 4];

let reduceResult = values.myReduce((a, b) => a + b);

console.log(reduceResult);

// https://www.youtube.com/watch?v=q-AFDJUiKAQ&ab_channel=silentNikka

// https://www.youtube.com/watch?v=wD6ElFwnNpw&list=PL3ECRMec8GA4lroiD6KP5zVxN1laiVRCb&ab_channel=silentNikka

//Promise