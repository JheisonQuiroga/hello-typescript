// Diferencia entre Interfaces y Type Aliases en TypeScript

// ===== INTERFACES =====
// Las interfaces se usan para definir contratos de objetos
// Se pueden extender y fusionar
interface User {
  name: string;
  age: number;
  email: string;
}

// Fusión automática de interfaces con el mismo nombre
interface User {
  phone?: string;
}

// Extensión de interfaces
interface Admin extends User {
  role: string;
  permissions: string[];
}

// ===== TYPE ALIASES =====
// Los type aliases son más flexibles, pueden representar cualquier tipo
// No se pueden fusionar automáticamente
type Person = {
  name: string;
  age: number;
  email: string;
};

// Los type aliases pueden ser uniones, primitivos, etc.
type Status = "active" | "inactive" | "pending";
type ID = string | number;

// Intersección de tipos (similar a herencia)
type Employee = Person & {
  employeeId: number;
  department: string;
};

// ===== EJEMPLO DE USO =====
const user: User = {
  name: "John",
  age: 30,
  email: "john@example.com",
  phone: "123456789"
};

const admin: Admin = {
  name: "Jane",
  age: 28,
  email: "jane@example.com",
  role: "superadmin",
  permissions: ["read", "write", "delete"]
};

const person: Person = {
  name: "Bob",
  age: 25,
  email: "bob@example.com"
};

const employee: Employee = {
  name: "Alice",
  age: 35,
  email: "alice@example.com",
  employeeId: 1001,
  department: "Engineering"
};

const status: Status = "active";
const userId: ID = 12345;

console.log(user, admin, person, employee, status, userId);