// this is a named function
function sumOrder(price: number, quantity: number): number {
    return price * quantity;
}


let sumOrder2: Function;

sumOrder2 = (price: number, quantity: number): number => {
    return price * quantity;
};

const anotherSum = sumOrder2(25, 2);

console.log(anotherSum);
console.log(sumOrder2)

// descriptive
let sumOrder3: (price: number, quantity: number) => number;

// implementation
sumOrder3 = (x, y) => x * y;

console.log(sumOrder3(17, 3));

// one-liner
let sumOrder4: (price: number, quantity: number) => number = (price, quantity) => price * quantity;
console.log(sumOrder4(19, 3));