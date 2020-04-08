const component = {
    name: 'GPU',
    vendor: 'ASUS'
};

function order1(component: any) {
    console.log(component);
}

order1(component);

// with destructuring params
function order2({name, vendor} : {name: string, vendor: string}) {
    console.log(name, vendor);
}

order2(component);

// rename at the same time!
function order3({name: gpuName, vendor: vendorName}) {
    return {gpuName, vendorName};
}

order3(component);

// also works for declaration!

const {vendorName} = order3(component);
console.log(vendorName);

// array destructuring
const vendors = ['ASUS', 'Intel', 'Samsung'];

const [first, second, third] = vendors;
console.log(first);
console.log(second);
console.log(third);

function logVendors([first, second, third]: any) {
    console.log(first, second, third);
}

logVendors(vendors);