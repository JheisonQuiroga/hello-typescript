import { Product, taxCalculation } from './05-function-destructuring.js';

const shoppingCart: Product[] = [
  {
    description: 'Iphone 17 Pro Max',
    price: 1999.9,
  },
  {
    description: 'Ipad Air',
    price: 800.0,
  }
]

const tax: number = 0.19;
const [total, totalTax] = taxCalculation( { tax, products: shoppingCart } );

console.log('---- Import / Export ----');
console.log(`Total: ${total}`);
console.log(`Tax: ${totalTax}`);