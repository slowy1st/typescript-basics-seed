const pizza = {
    name: 'Pepperoni',
    price: 15
};

const toppings = ['pepperoni'];

const order = {
    pizza: pizza,
    toppings: toppings
};

// in es6:
const orderInEs6 = {pizza, toppings};
// creates the same, creates properties based of the value of another property

console.log(order);
console.log(orderInEs6);

// also works in functions, wtf, how?
function createOrder(pizza: any, topping: any) {
    return { pizza, topping};
}

console.log(createOrder(pizza, toppings));

const pepperoniPizza = {
    name: 'Pepperoni',
    price: 15,
    getName: function() {
        return this.name;
    }
};

console.log(pepperoniPizza.getName());

// ES6-style:
const anotherPizza2 = {
    name: 'Pepperoni',
    price: 15,
    // property with :, functions with ()
    getName() {
        return this.name;
    }
};
console.log(anotherPizza2.getName());