// typescript types are lower case!

let pizzaCost = 10;
// pizzaCost = '25' does not work, praise the lords, because string is not assignable to number

// this is equivalent, but more descriptive
let pizzaCostWithType: number = 10;

const pizzaToppings: number = 2;

// return type is implied by return value
function calculatePrice(cost: number, toppings: number) {
    return cost + toppings * 1.5;
}

const totalPrice: number = calculatePrice(pizzaCost, pizzaToppings);
console.log(`Pizza cost:; ${totalPrice}`);

