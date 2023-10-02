/* NAMED EXPORTS */

// import { addToCart, totalPrice as price, quantity } from './shoppingCart.js';

console.log(`Importing module...`);
// // console.log(shippingCost); //Not possible: variables scope is only the module itself

// addToCart('bread', 5);
// console.log(price, quantity);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

/* DEFAULT EXPORTS */

import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
