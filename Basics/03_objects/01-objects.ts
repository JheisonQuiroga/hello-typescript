/**
 * 1. Literal Object
 */


let person = {
  name: "Duban",
  lastName: "Qurioga",
  age: 26,
  isActive: true,
}

person = {
  name: "Clark",
  lastName: "Kent",
  age: 30,
  isActive: false,
  // powers: ["Flight", "Super Strength"], // Esto genera error por que la propiedad no está definida en el objeto original
}

console.log(person);

// 1.1. Object with explicit type

let person2: { name: string; lastName: string; age: number; isActive: boolean; } = {
  name: "Duban",
  lastName: "Quiroga",
  age: 26,
  isActive: true,
}

console.log({person2});


// 2. Object Types

// Definiendo el tipo de un objeto de forma anónima

function greet( person: { name: string; lastName: string } ): string {
  return `Hello, ${ person.name } ${ person.lastName }`;
}

// 2.1. También pueden definirse objetos por medio de una interfaz (ver 03-object-interface.ts)

// 2.2. Usando un Type Alias

type Person = {
  name: string;
  lastName: string;
}

function printPersonInfo( person: Person ): void {
  console.table(person);
}

printPersonInfo({ name: "Bruce", lastName: "Wayne" });

// 3. Property Modifiers

// 3.1. Optional Properties
/** 
 * * A diferencia de las funciones la posición de las propiedades opcionales en los objetos
 * * es irrelevante, ya que se identifican por su nombre y no por la posición. 
*/

type Car = {
  brand: string;
  model: string;
  year?: number; // Optional property
}

const myCar: Car = {
  brand: "Toyota",
  model: "Hilux",
  year: 2025,
}

const oldCar: Car = {
  brand: "Chevrolet",
  model: "Camaro", // The optional property is not mandatory
}

// 3.2. Methods in objects

let superHero: { name: string; age?: number, powers: string[]; getName: () => string }

superHero = {
  name: "Duban",
  // age: 26, // the age is an optional property
  powers: ["SuperStrength", "Intelligence", "Sexy"],
  getName() {
    return this.name;
  }
}