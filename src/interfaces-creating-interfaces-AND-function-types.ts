// type PizzaAgain = {
//     name: string,
//     sizes: string[]
// }

interface Sizes {
    sizes: string[];
}

interface PizzaAgain extends Sizes {
    name: string;
    toppings?: number;

    getAvailableSizes(): string[];
    [key: number]: string
}

let pizzaAgain: PizzaAgain;

function createPizza(name: string, sizes: string[]): PizzaAgain {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    }
}

pizzaAgain = createPizza('Hawaii', ['small', 'medium']);

// combines different interfaces
interface Pizzas {
    data: PizzaAgain[]
}

console.log(pizzaAgain);
pizzaAgain.toppings = 3;
console.log(pizzaAgain);

pizzaAgain[1] = 'abc;'
console.log(pizzaAgain[1]);