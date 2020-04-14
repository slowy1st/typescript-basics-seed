let pizza3;

// put anything into pizza
pizza3 = {
    name: 'pepperoni',
    price: 17
};

// declares structure
let pizza4: {
    name: string,
    price: number,
    foo: string,
    getName(): string
};

pizza4 = {
    name: 'pepperoni',
    price: 13,
    foo: 'any',
    getName(): string {
        return pizza4.name;
    }
};

console.log(pizza4.getName());

