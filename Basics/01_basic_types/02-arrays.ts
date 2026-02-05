// ============================================
// 1. ARRAYS
// ============================================

// 1.1. Formas de tipar un Array

const numbers: number[] = [1, 2, 3, 4, 5];
const numbers2: Array<number> = [1, 2, 3, 4, 5];

const strings: string[] = ['a', 'b', 'c', 'd', 'e'];
const strings2: Array<string> = ['a'];

// Multiples tipos de datos en un Array

const variable: (string | number | boolean)[] = ["a", 2, true, "b", 3, false];
const variable2: Array<string | number | boolean> = ["a", 2, true, "b", 3, false];

// Funciones comunes de los Arrays

const fruits: string[] = ['apple', 'banana', 'strawberry'];

fruits.forEach((fruit) => console.log(fruit.toUpperCase()));