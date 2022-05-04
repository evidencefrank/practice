//with limits = 2 sets

function cartProduct(setA, setB) {
    //check if inputs are empty or ...
    const product = [];

    for (let setAEl of setA) {
        if (!Array.isArray(setAEl)) {
            setAEl = [setAEl];
        }
        for (const setBEl of setB) {
            product.push([...setAEl, setBEl])
        }
    }

    return product;
}

const colors = ['blue', 'red'];
const sizes = ['s', 'm', 'l'];
console.log(cartProduct(colors, sizes)); // [['blue', 'm'], ....];

//Big O
//Time Complexity => O(n*m), O(n^2) if n = m
//Space Complexity => O(n*m), O(n^2) if n = m


//withouts limits

function cartesian(...sets) { //bottom up approach
    let tempProduct = sets[0];

    for (let i = 1; i < sets.length; i++) {
        tempProduct = cartProduct(tempProduct, sets[i]);
    }

    return tempProduct;
}

const colors1 = ['blue', 'red'];
const sizes1 = ['s', 'm', 'l', 'xl'];
const styles1 = ['round neck', 'v neck'];
console.log(cartesian(colors1, sizes1, styles1)); // [['blue', 'm'], ....];

//Big O
//Time Complexity => O(n^x)
//Space Complexity => O(n^x)