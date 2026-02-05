/* Array Types */
const stringArray: string[] = ['apple', 'banana', 'watermelon'];
const stringArray2: Array<string> = ['apple', 'banana', 'watermelon'];
const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [1, 2, 3];

const mixedArray: (string | number | boolean)[] = ['strawberry', 5, true];
const mixedArray2: Array<string | number | boolean> = ["Watermenlon", 10, true];

/* Object Types */
/* Un interfaz se utiliza para definir la estructura de un objeto y se usa para
tipar los objetos, además su sintaxis de escritura se define con UpperCamelCase */
interface Hero {
  name: string;
  hp: number;
  isAlive: boolean;
  abilities: string[];
  // Optional property
  address?: Address;
}

interface Address {
  street: string;
  city?: string;
}

const hero: Hero = {
  name: 'Superman',
  hp: 100,
  isAlive: true,
  abilities: ['flight', 'super strength'],
}

const batman: Hero = {
  name: "Batman",
  hp: 100,
  isAlive: false,
  abilities: ['rich', 'intelligent'],
  address: {
    street: 'Unknown',
    city: 'Gotham'
  }
}

console.log({hero, batman});

export {};