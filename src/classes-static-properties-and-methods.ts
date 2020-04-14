class Coupon {
    static allowed = ['Pepperoni', 'Blazing Inferno'];

    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

let allowed = Coupon.allowed;
console.log(allowed);
let couponName = Coupon.create(13.7);
console.log(couponName)



// this doesn't work:
// new Coupon().allowed;