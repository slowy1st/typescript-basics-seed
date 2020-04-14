class Bidsa3 {
    toppings: string[] = [];

    // readonly is treated like private name -> will automatically be assigned to member variable name
    constructor(readonly name: string) {}

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const bidsa3 = new Bidsa3('pepperoni');

bidsa3.addTopping('pepperoni');

console.log(bidsa3);

// this does not work
// bidsa3.name = 'blub';

console.log(bidsa3.name);