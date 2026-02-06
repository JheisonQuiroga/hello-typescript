// ============================================
// 1. Any
// ============================================

/* El tipo de dato Any se propaga, es decir que es contagioso, 
es por eso mismo que lo recomendable, es evitar utilizarlo 
*/

let anyThing: any = "Hola";
anyThing = 10;
anyThing = {};
// anyThing.greet(); // * Esto es permitido

// Los resultados posteriores al tipo de dato que contiene any, también serán any
const result = anyThing + 10;

// ============================================
// 2. Unknown
// ============================================

/* 
    * El tipo de dato Unknown es similar a Any, pero es más seguro y **estricto**.
    * No permite realizar operaciones o acceder a propiedades sin antes hacer una 
    * validación de tipo.
    * Esta validación es conocida como: TYPE NARROWING
*/

let unknownValue: unknown = "Hola";
unknownValue = 69;
unknownValue = true;
// unknownValue.greet(); // Esto genera una advertencia ya que el tipo de dato es desconocido.
// const add = unknownValue + 10; // Lanza una advertencia, ya que se debe de verificar el tipo.

// 2.1. TypeNarrowing
/* 
  * Verifica previamente el tipo de dato para poder hacer operaciones o acceder a sus propiedades 
*/ 

if ( typeof unknownValue === "string" ) {
  console.log(unknownValue.toUpperCase());
} else if ( typeof unknownValue === "number" ) {
  console.log(unknownValue.toFixed(2));
} else {
  console.log(unknownValue);
}

/**
 * 3. Never - impossible type
 * Es un tipo de dato que representa errores o valores que nunca ocurren.
 * Se utiliza para las funciones que lanzan excepciones o que no
 * terminan su ejecución normalmente (por ejemplo, bucles infinitos).
 */

// Función que lanza un error, retorna un throw, más nunca un valor.
function throwError(): never {
  throw new Error("This is an error");
}

try {
  throwError(); // Lanza un error cuando se ejecuta
} catch ( error: any ) {
  console.log(error.message);
}

// Función con bucle infinito

function infiniteLoop(): never {
  while ( true ) {
    
  }
}

// Using type Narrowing with never

function processValue( value: string | number ) {
  if ( typeof value === "string" ) {
    console.log(value.toUpperCase());
  } else if ( typeof value === "number" ) {
    console.log(value.toFixed(2));
  } else {
    // En este punto, el tipo de dato de value es never, ya que no puede ser ni string, ni number.
    // Esto puede ser posible ya que se puede presentar un error de tipo en tiempo de ejecución.
    throwError(); // Esto es permitido, retorna never
  }
}

// infiniteLoop(); // Nunca termina su ejecución

// 2. Retorno de más tipos de datos con never

function exampleWithNever( message: string ): (never | string) {

  if ( false ) {
    throw new Error("Error!");
  }

  return message;
}

// ============================================
// 4. void
// ============================================

// No retorna ningún valor, pero si puede retornar undefined

function greet(): void {
  console.log("Hello, World Typescript!");
}

function logMessage( message: string ): void {
  if ( message.length === 0 ) {
    return undefined; // Esto es permitido, ya que void permite retornar undefined
  }

  console.log(message);
  return // Esto es lo mismo a retornar undefined, lo cual es permitido.
}