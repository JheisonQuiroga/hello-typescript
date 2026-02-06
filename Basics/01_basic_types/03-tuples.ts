/**
 * TUPLES IN TYPESCRIPT
 * 
 * Una tupla es una colección de elementos que pueden ser de diferentes tipos de datos.
 * Sus datos son inmutables en cuanto a la posición y el tipo de cada elemento.
 */

// ============================================
// 1. BASIC TUPLE DECLARATION
// ============================================

// Definiendo tipos de una tupla con distintos tipos de datos
let tuple1: [string, number] = ["hello", 42];
console.log(tuple1[0]); // "hello" (string)
console.log(tuple1[1]); // 42 (number)

// Accediendo a los elementos de una tupla
const firstName: string = tuple1[0];
const age: number = tuple1[1];

// ❌ Errores de asignación
// tuple1 = [42, "hello"];           // Wrong type order
// tuple1 = ["hello", 42, true];     // Too many elements
// tuple1 = ["hello"];               // Missing required element


// ============================================
// 2. TUPLES WITH MULTIPLE TYPES
// ============================================

// Tupla con más de dos tipos de datos
let user: [string, number, boolean] = ["Alice", 30, true];
//        [name,    age,    isActive]

const [name, userAge, isAdmin] = user;
console.log(name);    // "Alice"
console.log(userAge); // 30
console.log(isAdmin); // true


// ============================================
// 3. OPTIONAL TUPLE ELEMENTS
// ============================================

// Hacer un elemento opcional en una tupla
let response: [string, number?] = ["success"];
console.log(response); // ["success"]

response = ["success", 200];
console.log(response); // ["success", 200]

let coordinates: [number, number, string?] = [10, 20];
coordinates = [10, 20, "northwest"];


// ============================================
// 4. REST ELEMENTS IN TUPLES
// ============================================

// Tupla con elementos rest
let list: [string, ...number[]] = ["id", 1, 2, 3, 4, 5];
console.log(list[0]); // "id" (string)
console.log(list[1]); // 1 (number)
console.log(list); // ["id", 1, 2, 3, 4, 5]

// Tupla con rest de booleanos
let data: [string, number, ...boolean[]] = ["status", 200, true, false, true];


// ============================================
// 5. NAMED TUPLE ELEMENTS
// ============================================

// Tupla con elementos nombrados, usando alias de tipo, hacen el código más legible
type UserInfo = [name: string, age: number, admin: boolean];
let userInfo: UserInfo = ["Bob", 25, false];

// DESTRUCTURING
const [userName, userAge2, isUserAdmin] = userInfo;

// También se puede usar la sintaxis de elementos nombrados directamente en la declaración
let employee: [firstName: string, lastName: string, salary: number] = 
  ["John", "Doe", 50000];


// ============================================
// 6. USE CASE: RETURNING MULTIPLE VALUES
// ============================================

// Función que retorna una tupla
function getUserData(): [string, number, string] {
  const name = "Charlie";
  const age = 35;
  const email = "charlie@example.com";
  return [name, age, email];
}

// Usada con destructuración
const [userName2, userAge3, userEmail] = getUserData();
console.log(`${userName2} is ${userAge3} years old`);


// ============================================
// 7. USE CASE: FUNCTION PARAMETERS
// ============================================

// Función que acepta una tupla como parámetro
function logPoint(point: [number, number]): void {
  console.log(`X: ${point[0]}, Y: ${point[1]}`);
}

logPoint([10, 20]);

// Con parámetros nombrados
function logCoordinate(coord: [x: number, y: number, z?: number]): void {
  console.log(`Position: (${coord[0]}, ${coord[1]}${coord[2] ? `, ${coord[2]}` : ""})`);
}

logCoordinate([5, 10]);
logCoordinate([5, 10, 15]);

// ============================================
// 7.1 USE CASE: TUPLES WITH READONLY PROPERTIES
// ============================================

type Config = readonly [server: string, port: number, useSSL: boolean];
const config: Config = ["localhost", 8080, true];

// config[0] = "otherhost"; // Esto genera error