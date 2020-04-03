// use this instead of concat or slice - use this when dealing with immutable data
const people = ['john', 'billy'];
const otherPeople = ['jane', 'karen'];

const mergedPeople = [...people, ...otherPeople];

console.log(mergedPeople);