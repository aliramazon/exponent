const factorialV1 = (n) => {
    let result = 1;

    cons;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

/* Maximum depth of call stack is n, Time complexity of O(N) */
const factorialV2 = (n) => {
    if (n === 0) return 1;

    return n * factorialV2(n - 1);
};

console.log(factorialV2(5));
