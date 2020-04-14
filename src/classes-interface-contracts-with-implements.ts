interface SizesInterface {
    availableSizes: string[];
}

interface PizzaInterface extends SizesInterface {
    readonly name: string;
    toppings: string[];

    updateSizes(sizes: string[]): void;

    addTopping(topping: string): void;
}

abstract class AFSizes implements SizesInterface {
    // sizes needs to be public
    constructor(protected sizes: string[]) {
    }

    set availableSizes(sizes: string[]) {
        this.availableSizes = sizes;
    }

    get availableSizes(): string[] {
        return this.availableSizes;
    }
}

class AFPizza extends AFSizes implements PizzaInterface {
    public toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        // only works if sizes in KKSizes is at least protected
        this.sizes = sizes;
    }

    addTopping(topping: string): void {
        this.toppings.push(topping);
    }
}

const afPizza = new AFPizza('pepperoni', ['blibla', 'blub']);
console.log(afPizza);

afPizza.updateSizes(['blubli', 'blab']);
console.log(afPizza);