let selectedTopping : string = 'pepperoni';

// impure function (pure function = doesn't mutate values outside itself)
function selectTopping(topping: string): void {
    selectedTopping = topping;
}

selectTopping('bacon');

console.log(selectedTopping);