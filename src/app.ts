function multiply(a, b = 25) {
    return a * b;
}

// basically:
// if (!b) {
//     b = 25;
// }

console.log(multiply(7, 13));
console.log(multiply(13));