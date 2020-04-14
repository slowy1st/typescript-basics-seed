// ? == optional
let sumOrder7: (price: number, quantity?: number) => number;

// // old way
// sumOrder3 = (x, y) => {
//     if (!y) {
//         return x;
//     }
//
//     return x * y;
// };
//
// // with ||
// sumOrder3 = (x, y) => {
//     const newY = y || 1;
//
//     return x * newY;
// };

// with defaultValue
sumOrder7 = (x, y = 1) => x * y;

console.log(sumOrder7(13));
console.log(sumOrder7(13, 12));