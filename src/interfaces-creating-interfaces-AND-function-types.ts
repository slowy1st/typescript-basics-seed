// type PizzaAgain = {
//     name: string,
//     sizes: string[]
// }

interface PizzaAgain {
    name: string;
    sizes: string[]
}

let pizzaAgain: PizzaAgain;

function createPizza(name: string, sizes: string[]): PizzaAgain {
    return {
        name, sizes
    }
}

pizzaAgain = createPizza('Hawaii', ['small', 'medium']);

// combines different interfaces
interface Pizzas {
    data: PizzaAgain[]
}