function sum(A) {
    if (A === null || A.length === 0) {
        return -1;
    }

    let result = 0;
    for (let a of A) {
        result += a;
    }
    return result;
}