// ENUMS IN TYPESCRIPT

/**
 * Los enums (enumeraciones) en TypeScript son una caracteristica que permite
 * definir un conjunto de constantes con nombre. Los enumeradores facilitan
 * la organización y el manejo de valores relacionados.
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

enum AudioLevel2 {
  min = 1,
  mid,
  max = 10
}

console.log(AudioLevel2)