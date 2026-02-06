// ============================================
// 1. Interfaces
// ============================================

/* Una interfaz es otra forma de definir la firma de un tipo de objeto. */

interface User {
  readonly id: number;
  readonly name: string;
  email?: string;
  role: "admin" | "user" | "editor";
  // Hay dos formas de definir métodos en una interfaz:
  greet(): string;
  showInfo: () => void;
}

const user1: User = {
  id: 0,
  name: "Jheison Quiroga",
  role: "admin",
  greet() {
    return `Hello, I'm ${this.name}!`;
  },
  showInfo() {
    console.table({
      id: this.id,
      name: this.name,
    })
  }
}

// Una interfaz puede ser extendible, esa es la diferencia con un type alias, que no puede ser extendible

interface Person {
  name: string;
  surname: string;
  age: number;
}

interface Identifier {
  id: `user-${number}`
}

interface User2 extends Identifier, Person {
  email: string;
  role: "user";
}

const user2: User2 = {
  email: "",
  role: "user",
  id: "user-12345",
  name: "",
  surname: "",
  age: 0
}

// 1.1. Una interfaz puede fusionarse

interface Hero {
  name: string;
}

interface Hero {
  power: string;
}

const hero: Hero = {
  name: "Duban",
  power: "Intelligence",
}

// 1.2. Interface to type Functions

interface MathOperation {
  (n1: number, n2: number): number,
}

const calculator: MathOperation = (n1, n2) => {
  return n1 + n2
}

calculator(10, 2);

// 1.3. Interfaces with Classes

interface MediaPlayer {
  play: () => void;
  pause: () => void;
  stop: () => void;
}

// Interfaz like property

interface AudioPlayer {
  volume: number;
}

class Reproductor implements MediaPlayer, AudioPlayer {
  volume: number = 100;
  
  play():void {
    console.log("Playing...")
  }
  pause():void {
    console.log("Pause song...")
  }
  stop():void {
    console.log("Stopping...")
  }
}
