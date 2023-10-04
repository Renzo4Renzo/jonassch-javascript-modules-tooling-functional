import cloneDeep from 'lodash';

import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

// const title = document.querySelector('.title');
// title.innerHTML = 'Baby I love the way';

/*Parcel code that prevents page-reload*/
if (module.hot) {
  module.hot.accept();
}
