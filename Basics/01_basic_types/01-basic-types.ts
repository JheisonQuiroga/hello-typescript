import '../03_objects/03-object-interface.js';

// ============================================
// 1. PRIMITIVE TYPES
// ============================================


// 1.1. Strings
// Una constante tiene que estar inicializada de lo contrario marcara un error
const name: string = "Duban";
const lastname: string = 'Quiroga';
// const nickname; // Esto marca un error

// Const 
/* Una constante infiere el tipo de dato a partir del valor asignado, y además su tipo
es el valor literal asignado. */

const fullName = "Jheison Quiroga";

console.log(`I'm ${name} ${lastname}`);

/// Utilizando el Optional chaining
console.log(lastname[10]?.toUpperCase() || 'Not found')

// 1.2. Numbers
let hpPoints: number | 'FULL' = 100;
hpPoints = 'FULL';

// 1.3. Boolean
let isAlive: boolean = true;

// 1.4. null and undefined

let nullValue: null = null;
const undefinedValue: undefined = undefined;

// 1.5. BigInt
let bigIntValue: bigint = 9007199254741991n; // Valor mayor a Number.MAX_SAFE_INTEGER

// 1.6. Symbol
const symbol: symbol = Symbol("a");

// 1.7. Any
/*  Es un tipo de dato que no es muy recomendable utilizar. 
    Una variable declarada con 'let' que NO ES INICIALIZADA por lo general
    queda de tipo 'any'
*/

let superHeroName: any = 'Batman';
let nickname; /* Variable implicita de tipo any - undefined */

/// Casteo de tipos de datos - Type Casting or Type Assertion (Aserción de tipos).
/* El casteo es un trato de tipo de dato superficial, es decir tratar un tipo de dato
    como otro tipo de dato, sin realmente alterarlo.
    Convierte tipos de datos compatibles entre si.  
    Las aserciones de tipo se utilizan para indicarle al compilador que trate una variable
    como un tipo de dato especifico.
    Hay dos formas de hacer un casteo de tipo en TypeScript:
    */

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

// ============================================
// 2. UNION TYPES
// ============================================

let age: number | string | null;
age = 26;
age = "26";
age = null;

/*  Narrow with Union Types
    * Para trabajar correctamente con los union types, se debe utilizar un narrow con el 
    * union type, esto para poder deducir un tipo de dato especifico. Se verifica el tipo de
    * dato para poder trabajar con el y poder realizar operaciones. 
*/

function printAge(age: number | string | null): void {
    if (typeof age === "number") {
        console.log(age.toFixed());
    } else if (typeof age === "string") {
        console.log(age.toUpperCase());
    } else {
        console.log(age);
    }
}

printAge(age);
printAge(26);
printAge("26");
printAge(null);

// ============================================
// 3. LITERAL TYPES
// ============================================

const city = "Bogota";
let level: "low" | "mid" | "high";
level = "low";
level = "mid";
level = "high";


// Se utiliza el export para convertir el archivo en un módulo.
export {};