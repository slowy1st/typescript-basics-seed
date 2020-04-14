class KKSizes {

    constructor(protected sizes: string[]) {

    }
}

class KKPizza extends KKSizes {
    public toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        // only works if sizes in KKSizes is at least protected
        this.sizes = sizes;
    }
}

const kkPizza = new KKPizza('pepperoni', ['blibla', 'blub']);
console.log(kkPizza);

kkPizza.updateSizes(['blubli', 'blab']);
console.log(kkPizza);