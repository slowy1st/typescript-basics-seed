class Bidsa {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

// js way
// function Bidsa(name: string) {
//     this.name = name;
//     this.toppings = [];
// }
//
// Bidsa.prototype.addTopping = function addTopping(topping: string) {
//     this.toppings.push(topping);
// }

const bidsa = new Bidsa('pepperoni');

bidsa.addTopping('pepperoni');

console.log(bidsa);