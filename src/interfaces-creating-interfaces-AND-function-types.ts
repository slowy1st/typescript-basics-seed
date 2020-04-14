// type PizzaAgain = {
//     name: string,
//     sizes: string[]
// }

interface PizzaAgain {
    name: string;
    sizes: string[];
    getAvailableSizes(): string[]
}

let pizzaAgain: PizzaAgain;

function createPizza(name: string, sizes: string[]): PizzaAgain {
    return {
        name, sizes, getAvailableSizes() {
            return this.sizes;
        }
    }
}

pizzaAgain = createPizza('Hawaii', ['small', 'medium']);

// combines different interfaces
interface Pizzas {
    data: PizzaAgain[]
}