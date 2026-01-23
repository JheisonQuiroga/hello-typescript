/**
 * TUPLES IN TYPESCRIPT
 * 
 * Una tupla es una colección de elementos que pueden ser de diferentes tipos de datos.
 * Sus datos son inmutables en cuanto a la posición y el tipo de cada elemento.
 */

// ============================================
// 1. BASIC TUPLE DECLARATION
// ============================================

// Define a tuple with types at each position
let tuple1: [string, number] = ["hello", 42];
console.log(tuple1[0]); // "hello" (string)
console.log(tuple1[1]); // 42 (number)

// Accessing tuple elements
const firstName: string = tuple1[0];
const age: number = tuple1[1];

// ❌ These would cause errors:
// tuple1 = [42, "hello"];           // Wrong type order
// tuple1 = ["hello", 42, true];     // Too many elements
// tuple1 = ["hello"];               // Missing required element


// ============================================
// 2. TUPLES WITH MULTIPLE TYPES
// ============================================

// Three-element tuple
let user: [string, number, boolean] = ["Alice", 30, true];
//        [name,    age,    isActive]

const [name, userAge, isAdmin] = user;
console.log(name);    // "Alice"
console.log(userAge); // 30
console.log(isAdmin); // true


// ============================================
// 3. OPTIONAL TUPLE ELEMENTS
// ============================================

// Make the last element optional using ?
let response: [string, number?] = ["success"];
console.log(response); // ["success"]

response = ["success", 200];
console.log(response); // ["success", 200]

// More complex optional tuple
let coordinates: [number, number, string?] = [10, 20];
coordinates = [10, 20, "northwest"];


// ============================================
// 4. REST ELEMENTS IN TUPLES
// ============================================

// Tuple with rest elements - first element is string, followed by any numbers
let list: [string, ...number[]] = ["id", 1, 2, 3, 4, 5];
console.log(list[0]); // "id" (string)
console.log(list[1]); // 1 (number)
console.log(list); // ["id", 1, 2, 3, 4, 5]

// Tuple with mixed rest elements
let data: [string, number, ...boolean[]] = ["status", 200, true, false, true];


// ============================================
// 5. NAMED TUPLE ELEMENTS
// ============================================

// Named tuples make the code more readable
type UserInfo = [name: string, age: number, admin: boolean];
let userInfo: UserInfo = ["Bob", 25, false];

// With destructuring
const [userName, userAge2, isUserAdmin] = userInfo;

// You can also use this syntax without a type alias
let employee: [firstName: string, lastName: string, salary: number] = 
  ["John", "Doe", 50000];


// ============================================
// 6. USE CASE: RETURNING MULTIPLE VALUES
// ============================================

// Function that returns a tuple
function getUserData(): [string, number, string] {
  const name = "Charlie";
  const age = 35;
  const email = "charlie@example.com";
  return [name, age, email];
}

// Usage with destructuring
const [userName2, userAge3, userEmail] = getUserData();
console.log(`${userName2} is ${userAge3} years old`);


// ============================================
// 7. USE CASE: FUNCTION PARAMETERS
// ============================================

// Function that accepts a tuple as parameter
function logPoint(point: [number, number]): void {
  console.log(`X: ${point[0]}, Y: ${point[1]}`);
}

logPoint([10, 20]);

// With named parameters
function logCoordinate(coord: [x: number, y: number, z?: number]): void {
  console.log(`Position: (${coord[0]}, ${coord[1]}${coord[2] ? `, ${coord[2]}` : ""})`);
}

logCoordinate([5, 10]);
logCoordinate([5, 10, 15]);


// ============================================
// 8. USE CASE: API RESPONSE HANDLING
// ============================================

type ApiResponse = [status: number, message: string, data?: Record<string, unknown>];

function handleResponse(response: ApiResponse): void {
  const [status, message, data] = response;
  
  console.log(`Status: ${status}`);
  console.log(`Message: ${message}`);
  
  if (data) {
    console.log(`Data:`, data);
  }
}

handleResponse([200, "Success", { id: 1, name: "Product" }]);
handleResponse([404, "Not Found"]);


// ============================================
// 9. READONLY TUPLES
// ============================================

// Prevent modification of tuple elements
let readonlyTuple: readonly [string, number] = ["immutable", 100];
// readonlyTuple[0] = "changed";  // ❌ Error: Cannot assign to readonly

// Readonly with rest elements
let readonlyList: readonly [string, ...number[]] = ["id", 1, 2, 3];


// ============================================
// 10. TUPLES VS ARRAYS - COMPARISON
// ============================================

// TUPLE - Fixed length, specific types at each position
let myTuple: [string, number, boolean] = ["hello", 42, true];

// ARRAY - Variable length, uniform type
let myArray: (string | number | boolean)[] = ["hello", 42, true, "world"];

// Key differences:
// - Tuple: Type safety for specific positions
// - Array: More flexible length, good for collections of same type
// - Tuple: Better for structured data (like function returns)
// - Array: Better for variable-length collections


// ============================================
// 11. COMPLEX TUPLE EXAMPLES
// ============================================

// Matrix representation
type Matrix = [
  [number, number, number],
  [number, number, number],
  [number, number, number]
];

const identityMatrix: Matrix = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
];

// Result with success/error tuple
type Result = 
  | [success: true, data: string]
  | [success: false, error: Error];

function processData(): Result {
  try {
    return [true, "Data processed"];
  } catch (e) {
    return [false, e as Error];
  }
}

const [success, payload] = processData();
if (success) {
  console.log("Data:", payload);
} else {
  console.log("Error:", (payload as Error).message);
}
