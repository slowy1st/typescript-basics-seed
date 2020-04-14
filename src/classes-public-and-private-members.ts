class Bidsa2 {
    toppings: string[] = [];

    // private name -> will automatically be assigned to member variable name
    constructor(private name: string) {}

    getName(): String{
        return this.name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const bidsa2 = new Bidsa2('pepperoni');

bidsa2.addTopping('pepperoni');

console.log(bidsa2);
console.log(bidsa2.getName());