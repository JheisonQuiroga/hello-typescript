/// ============================================
// 1. OBJECTS IN TYPESCRIPT
// ============================================

/**
 * 1.1 Literal Object
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
/* Definiendo el tipo de forma explicita, anonima o en línea.
  * Esta es la forma no recomendada de tipar un objeto.
*/

let person2: { name: string; lastName: string; age: number; isActive: boolean; } = {
  name: "Duban",
  lastName: "Quiroga",
  age: 26,
  isActive: true,
}

console.log({person2});

// ============================================
// 2. Object Types
// ============================================

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

// 2.3. Import types from other files

import type { User } from "./00-types.js";

const user: User = {
  id: 0,
  username: "jheisonquiroga",
  email: "jheison@fake.com",
  isDeveloper: true
}

// ============================================
// 3. Property Modifiers
// ============================================

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

// 3.3. Allowed Multiple Types

type NewPerson = {
  name: string;
  age: (number | string); // Age can be a number or a string
  otherProperty?: (string | number | boolean);
}

const personA: NewPerson = {
  name: "Duban",
  age: "Quiroga",
  otherProperty: true,
}

console.log("====== Allowed Multiple Types ======");
console.log({personA})
console.log("====================================");

// 3.4. readonly Properties

/** 
 * * Las propiedades tambien pueden ser de solo lectura, es decir que no pueden ser modificadas
 * * en tiempo de ejecucion, ni reasignadas en el código.
*/

type SomeType = {
  readonly prop: string;
}

function doSomething( obj: SomeType ) {
  console.log(obj.prop);

  try {
    // obj.prop = "New Value"; // Esto genera un error de compilación
  } catch ( error ) {
    console.error("Cannot reassign a readonly property");
  }
}

doSomething( { prop: "Initial Value" } );

// ============================================
// 4. Index Signatures
// ============================================

/**
 * * Las firmas de índice permiten definir propiedades o claves que no se conocen de antemano,
 * * pero que deben cumplir con un determinado tipo.
*/

interface StringArray {
  [index: number]: string;
}

const myStringArray: StringArray = ["Hello", "World", "TypeScript"];

console.log(myStringArray[0]);

// Common problem

interface NumberDictionary {
  [index: string]: number | string;
  length: number;
  name: string; // Esto genera error porque la propiedad name no es de tipo number, se soluciona con un Union Type
}

let myNumberDictionrary: NumberDictionary = {
  length: 10,
  name: "10",
}

myNumberDictionrary["key1"] = 5;
myNumberDictionrary["key2"] = 5;
myNumberDictionrary["key3"] = 5;

console.log({myNumberDictionrary});
console.log(myNumberDictionrary.length);

// Use cases of index signatures

interface Salary {
  [employeeName: string]: number;
}

const salaries: Salary = {
  "Duban": 50000,
  "Clark": 10000,
  "Bruce": 200000
}

console.log(salaries["Duban"]);
console.log(salaries["Clark"]); 
console.log(salaries["Bruce"]);


// ============================================
// 5. Intersection Types with Objects
// ============================================

/**
 * * Más de un tipo de objeto combinado en uno solo.
 */

type UserBirthDay = {
  dateOfBirth: Date;
}

type UserEntity = User & UserBirthDay;

const newUser: UserEntity = {
  id: 1,
  username: "JheisonQuiroga",
  email: "noemail",
  isDeveloper: true,
  dateOfBirth: new Date("1998-06-19"),
}

export {};