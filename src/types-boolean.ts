const pizzas7: number = 1;

function offerDiscount(orders: number): boolean {
    return orders >= 3;
}

if (offerDiscount(pizzas7)) {
    console.log(`You're entitled to a discount!`)
} else {
    console.log(`Order more than 3 pizzas for a discount`);
}