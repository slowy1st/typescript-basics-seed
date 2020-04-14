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

const sizes3 = new Sizes3(['small', 'medium']);
console.log(sizes3);

// calls setter
sizes3.availableSizes = ['medium', 'large'];

// calls getter
sizes3.availableSizes = ['medium', 'large'];

console.log(sizes3);