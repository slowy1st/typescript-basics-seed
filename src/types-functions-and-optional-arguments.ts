function anotherSumOrder(price: number, quantity: number): number {
    return price * quantity;
}

// this doesn't work
// anotherSumOrder(1);

// ? == optional argument
function sumOrderWithOptional(price: number, quantity?: number) {
    // this doesn't work, because price can be undefined
    // return price * quantity;

    // with if check, it does work
    if (quantity) {
        return price * quantity;
    }
    return price;
}

console.log(sumOrderWithOptional(13, 7));
console.log(sumOrderWithOptional(13));