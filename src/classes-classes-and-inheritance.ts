class Sizes4 {
    constructor(public sizes: string[]) {

    }

    get availableSizes() {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

class Bidsa4 extends Sizes4 {
    toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }
}

const bidsa4 = new Bidsa4('Peperoni', ['small', 'medium']);
console.log(bidsa4.availableSizes);
