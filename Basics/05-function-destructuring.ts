/// Function destructuring

export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Iphone 17 Pro Max',
  price: 1999.9,
}

const ipad: Product = {
  description: 'Ipad Air',
  price: 800.0,
}

const shoppingCart: Product[] = [phone, ipad];
const tax: number = 0.19;

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation( options: TaxCalculationOptions ): [number, number] {
  
  const { tax, products } = options;
  
  let total = 0;

  products.forEach( ({ price }) => {
    total += price;
  })

  return [total, total * tax];
}

const result: number[] = taxCalculation( { tax, products: shoppingCart})
const [total, taxTotal] = result;

console.log(`Total: ${total}`);
console.log(`Tax: ${taxTotal}`);

console.log({result});

// export {};