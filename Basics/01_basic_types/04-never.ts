/**
 * 1. Never 
 * Es un tipo de dato que representa errores o valores que nunca ocurren.
 * Se utiliza para las funciones que lanzan excepciones o que no
 * terminan su ejecución normalmente (por ejemplo, bucles infinitos).
 */

// Función que lanza un error
function throwError(): never {
  throw new Error("This is an error");
}

throwError(); // Lanza un error cuando se ejecuta

// Función con bucle infinito

function infiniteLoop(): never {
  while ( true ) {
    
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