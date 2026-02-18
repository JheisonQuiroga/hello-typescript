const jjkCharacters = ["Sukuna", "Juji Itadori", "Toji Fushiguro", "Satoru Gojo"];

// Omitiendo datos del array utilizando (,) 
const [,, toji] = jjkCharacters;
const [, itadori, , gojo ] = jjkCharacters;

console.log(toji);
console.log(itadori);
console.log(gojo);

// Inferencia de tipos

const myArray: [string, number, boolean] = ["Duban Quiroga", 19, true];

const [name, favNumber, isDeveloper] = myArray;