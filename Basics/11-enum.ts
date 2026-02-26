// ENUMS IN TYPESCRIPT

/**
 * Los enums (enumeraciones) en TypeScript son una caracteristica que permite
 * definir un conjunto de constantes con nombre. Los enumeradores facilitan
 * la organización y el manejo de valores relacionados. Las Enumeraciones a diferencia 
 * de los Type Aliases, son transpilados a JavaScript, lo que significa que generan código 
 * adicional en tiempo de compilación, pero generan un impacto en el peso del código final.
 */

enum AudioLevel {
  min,
  mid,
  max
}

console.log({AudioLevel});
console.log(AudioLevel.min);
console.log(AudioLevel.mid);
console.log(AudioLevel.max);

// A las Enumeraciones se les pueden asignar valores personalizados.

enum AudioLevel2 {
  min = 1,
  mid,
  max = 10
}

console.log(AudioLevel2)

enum City {
  newYork = "New York",
  losAngeles = "Los Angeles",
  chicago = "Chicago"
}