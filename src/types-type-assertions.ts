type Pizza = {
    name: string,
    toppings: number
}

const typedPizza: Pizza = {name: 'Blazing Inferno', toppings: 17};

const serialized: string = JSON.stringify(typedPizza);


function getNameFromJson(obj: string): string {
    return JSON.parse(obj).name;
}

function getNameFromJsonWithGeneric(obj: string) {
    return (<Pizza>JSON.parse(obj)).name;
}

function getNameFromJsonWithAs(obj: string) {
    return (JSON.parse(obj) as Pizza).name;
}

console.log(getNameFromJson(serialized));
console.log(getNameFromJsonWithGeneric(serialized));
console.log(getNameFromJsonWithAs(serialized));

