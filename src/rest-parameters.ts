// pass any number of arguments into a single variable
function sumAll(arr: (number) []) {
    return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sum);

function sumAllWithRestParameters(message: (string), ...arr: (number) []) {
    console.log(arguments);
    return arr.reduce((prev, next) => prev + next);
}

const sum2 = sumAllWithRestParameters('Summed up with rest-params', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum2);