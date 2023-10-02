console.log(`Exporting module...`);

// console.log('Start fetching users...');
// //If this module is imported, the importer will have to wait for this line to complete
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users...');

const shippingCost = 10;
export const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as quantity };

export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
