const person = {
    name: 'Manu'
};

const address = {
    location: 'Basel'
};

const aggregates = {
    person, address
};

console.log(aggregates);
// { person: { name: 'Manu' }, address: { location: 'Basel' } }

// but wait!, there's more
const aggregatedWithSpreadOperator = {
    ... person,
    ... address
};

console.log(aggregatedWithSpreadOperator);
// -> { name: 'Manu', location: 'Basel' }
// copies properties :-)

// the old way:
const aggregatedJs = Object.assign({}, person, address);
console.log(aggregatedJs);