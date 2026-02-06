// ============================================
// 1. Type Narrowing
// ============================================

/**
 * * Es el proceso de verificar un tipo de dato amplio a un tipo de dato más especifico.
 * * Esto se hace para poder trabajar con el tipo de dato especifico y poder realizar operaciones 
 */

function printValue( value: string | number ) {
  // En este punto el tipo de dato de value es string o number, para esto se utiliza typeof guards
  if ( typeof value === "string" ) {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    // do nothing
  }
}

// 1.1. Truthiness Narrowing (Estrechamiento de veracidad)

/* En este punto se utiliza a favor los valores truthy o falsy para hacer un narrow del tipo de dato,
esto es util par verificar si un valor es null o undefined. */

function printMessage (message: string | null | undefined) {
  if (message) {
    console.log(message);
  }
  return;
}

// 1.2. The 'in' Operator Narrowing

/* 
  * El operador 'in' se utiliza para verificar si una propiedad existe en un objeto.
*/

interface Dog {
  move: () => void;
}

interface Bird {
  fly: () => void;
}

function moveAnimal (animal: Dog | Bird) {
  if ("move" in animal) {
    animal.move();
  } else {
    animal.fly();
  }
}

// 1.3. Instanceof Narrowing

function printDate(date: Date | string): string {
  if (date instanceof Date) {
    return date.toUTCString();
  }
  return new Date(date).toUTCString();
}