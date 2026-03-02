/* Se puede exportar cualquier tipo de dato, no solo funciones o clases.
  Para exportar una interfaz o un type, se utiliza la palabra reservada 'export' antes de la declaración 
  y para su uso se utiliza la palabra reservada 'type' para indicar que se está importando un tipo de dato.
  Esto para evitar confusiones con las funciones o clases que también se pueden exportar.
*/ 

import { type Product, taxCalculation } from './05_destructuring/01-function-destructuring.js';

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