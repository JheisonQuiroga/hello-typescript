// ============================================
// 1. Functions
// ============================================

function sayHello( msg?: string ): void {
  const message = msg || "Hello World!";
  console.log( message );
}

sayHello();
sayHello("Hola TypeScript!");

// Required parameters
/**
 * * En TypeScript, todos los parámetros de una función son obligatorios por defecto.
 */

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result: string = addNumbers(5, 10).toString();

console.log(`The result is: ${result}`);

// 1.1. Arrow Functions

const sayHelloArrowFunc = ( msg: string = "Hello from Arrow Function!" ): void => {
  console.log( msg );
}

const addNumbersArrowFunc = (n1: number, n2: number): string => {
  return `The sum is: ${ n1 + n2 }`;
}

console.log(addNumbersArrowFunc(5, 10));
sayHelloArrowFunc();
sayHelloArrowFunc("Hola mundo desde una función de flecha!")

// 1.2. Optional parameters
/* Por lo general los parámetros opcionales se definen al final de la lista de parámetros.
    * Si un parámetro opcional no se proporciona al llamar a la función, su valor será
    * undefined */

function completeName( firstName: string, lastName?: string ): string {
  return ` ${ firstName } ${ lastName || ""}`.trim();
}

console.log(completeName("John"));
console.log(completeName("John", "Doe"));

function multiplyNumbers(n1: number, n2?: number, base: number = 2): number {
  if (n2 === undefined) {
    return n1 * base;
  }
  return (n1 * (n2 ?? base));
}

const result1 = multiplyNumbers(5);
const result2 = multiplyNumbers(5, 2);
const result3 = multiplyNumbers(5, 2, 3);
const result4 = multiplyNumbers(6, undefined, 4);


console.log({ result1, result2, result3, result4 });

// 1.3. Default params

const addNumbersWithDefParam = (n1: number, n2: number = 0) => {
  return n1 + n2;
}

console.group("DefaultParams")
console.log(addNumbersWithDefParam(2));
console.log(addNumbersWithDefParam(2, 2));
console.groupEnd();

// 1.4. Function with object as parameter
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

function healCharacter(character: Character, amount: number): void {
  if (character.hp >= 100 || amount + character.hp > 100) {
    throw new Error(`${character.name} has full health`);
  }
  character.hp += amount;
  character.showHp();
}

const myCharacter: Character = {
  name: "Duban",
  hp: 0,
  showHp() {
    console.log(`HP: ${this.hp}`);
  }
}

healCharacter(myCharacter, 50);
healCharacter(myCharacter, 30);
try {
  healCharacter(myCharacter, 30);
} catch ( error: any ) {
  console.error(error.message);
}

// 1.5. Rest Parameters

/* * Contiene el resto de los parámetros en un array.
    * Solo puede haber un parámetro rest por función y debe ser el último parámetro. */

const fullName = ( firstName: string, ...args: string[] ): void => {
  console.log( `${ firstName } ${ args.join(" ") }`);
}

fullName("John", "Doe", "Smith");
fullName("Duban", "Quiroga");

// 1.6. Function Types

let myFunction: Function

myFunction = sayHello;
myFunction();

myFunction = addNumbers;
console.log(myFunction(1, 3));

myFunction = multiplyNumbers;
console.log(myFunction(6, 3, 2));

// Tambien se pueden definir funciones con tipos de datos especificos, ej:

type MathOperation = (a: number, b: number) => number;

const operation: MathOperation = (a, b) => a + b;

console.log(operation(5, 10));

/**
 * * 1.7. Function Type Expression
 * La forma más sencilla de definir **la firma** de una funcion, es utilizando
 * las expresiones de tipo funcion, que son similares a una arrow fn  
 */

myFunction = ( fn: ( msg: string ) => void ) => {
  fn("Hello World!");
}

myFunction( function( msg: string ) {
  console.log(msg);
})

// 1.8. Call Signatures - Firmas de llamada

type DescribableFunction = {
  description: string;
  ( someArg: number ): boolean;
}

function doSomething( fn: DescribableFunction ) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunct( someArg: number ): boolean {
  return someArg > 3;
}

myFunct.description = "Default description";

doSomething(myFunct);


export {};