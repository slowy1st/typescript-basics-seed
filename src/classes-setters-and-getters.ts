class Sizes3 {
    constructor(public sizes: string[]) {

    }

    get availableSizes() {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

const sizes = new Sizes3(['small', 'medium']);
console.log(sizes);

// calls setter
sizes.availableSizes = ['medium', 'large'];

// calls getter
sizes.availableSizes = ['medium', 'large'];

console.log(sizes);