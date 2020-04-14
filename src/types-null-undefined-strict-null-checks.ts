// set "strict": false, so variables can be null
// also check option "strictNullChecks"

let anotherCoupon: string = 'pizza25';

function removeCoupon(): void {
    // this doesn't work!
    // anotherCoupon = undefined;
}

let anotherCouponWithUnionType: string | undefined;

anotherCouponWithUnionType = '';
anotherCouponWithUnionType = undefined;

// but not null!
// anotherCouponWithUnionType = null;

// this means, we have to explicitly set undefined type


// call stuff to avoid warnings
removeCoupon();
console.log(anotherCoupon);
console.log(anotherCouponWithUnionType);