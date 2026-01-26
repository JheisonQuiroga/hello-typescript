import '../03-object-interface.js';


// Strings
// Una constante tiene que estar inicializada de lo contrario marcara un error
const name: string = "Duban";
const lastname: string = 'Quiroga';
// const nickname; // Esto marca un error


console.log(`I'm ${name} ${lastname}`);

/// Utilizando el Optional chaining
console.log(lastname[10]?.toUpperCase() || 'Not found')

// Numbers
let hpPoints: number | 'FULL' = 100;

// Boolean
let isAlive: boolean = true;

hpPoints = 'FULL';

// Any
/*  Es un tipo de dato que no es muy recomendable utilizar. 
    Una variable declarada con 'let' que NO ES INICIALIZADA por lo general
    queda de tipo 'any'
*/

let superHeroName: any = 'Batman';
let nickname; /* Variable implicita de tipo any - undefined */

/// Casteo de tipos de datos
/* El casteo es un trato de tipo de dato superficial, es decir tratar un tipo de dato
    como otro tipo de dato, sin realmente alterarlo.
    Convierte tipos de datos compatibles entre si.  */

superHeroName = 123;
superHeroName = 123.34343423;
(superHeroName as number).toFixed(2);
(<string>superHeroName).charAt(0);

nickname = 'The Dark Knight';


console.log({
  name,
  hpPoints,
  isAlive,
});

// Se utiliza el export para convertir el archivo en un módulo.
export {};