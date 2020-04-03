const pizzas = [
    {
        name: 'Pepperoni', toppings: ['pepperoni']
    }
];

// no-arrow-functions
let mappedPizzas = pizzas.map(function (pizza) {
    return pizza.name.toUpperCase();
});

console.log(mappedPizzas);

// with-arrow-functions (no () used if only one argument)
pizzas.map(pizza => {
    return pizza.name.toUpperCase();
});

console.log(mappedPizzas);

// arrow-functions with implicit return
pizzas.map(pizza => pizza.name.toUpperCase());


// this references to const pizza!
const pizza = {
    name: 'Blazing Inferno',
    getName: function () {
        console.log(this);
    }
};
console.log(pizza);

// what if we have a timeout? -> this "this" does not work
// const pizzaWithTimeout = {
//     name :'Blazing Inferno',
//     getName: function() {
//         setTimeout(function() {
//             console.log(this);
//         }, 100);
//     }
// };

// but with arrow functions it does! arrow functions ignores the scope (doesn't create a new one), 'inherital scope' (no new this value will be binded)
const pizzaWithTimeout = {
    name: 'Blazing Inferno /w timeout',
    getName: function () {
        setTimeout(() => {
            console.log(this);
        }, 100);
    }
};
console.log(pizzaWithTimeout);

// this doesn't work, because arrow function is pointing to
// const anotherPizza = {
//     name: 'anotherPizza',
//     getName: () => this.name,
// };
// console.log(anotherPizza.getName())

const anotherPizza = {
    name: 'anotherPizza',
    getName: () => pizza.name
};
console.log(anotherPizza.getName());
