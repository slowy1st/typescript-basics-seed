type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSize7: Size = 'small';

const selectSize7: Callback = (x) => {
    pizzaSize7 = x;
}


let size: Size = 'large';
selectSize7(size);

console.log(pizzaSize7);