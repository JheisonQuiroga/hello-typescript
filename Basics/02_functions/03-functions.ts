function sayHello( msg?: string ): void {
  const message = msg || "Hello World!";
  console.log( message );
}

sayHello();
sayHello("Hola TypeScript!");

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result: string = addNumbers(5, 10).toString();

console.log(`The result is: ${result}`);

const addNumbersArrowFunc = (n1: number, n2: number): string => {
  return `The sum is: ${ n1 + n2 }`;
}

console.log(addNumbersArrowFunc(5, 10));

// Optional parameters
function multiplyNumbers(n1: number, n2?: number, base: number = 2): number {
  return (n1 * (n2 ?? base));
}

const result1 = multiplyNumbers(5);
const result2 = multiplyNumbers(5, 2);
const result3 = multiplyNumbers(5, 2, 3);

console.log({ result1, result2, result3 });


// Function with object as parameter
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

function healCharacter(character: Character, amount: number): void {
  if (character.hp >= 100 || amount + character.hp > 100) {
    throw new Error(`${character.name} has full health`);
  }
  character.hp += amount;
  character.showHp();
}

const myCharacter: Character = {
  name: "Duban",
  hp: 0,
  showHp() {
    console.log(`HP: ${this.hp}`);
  }
}

healCharacter(myCharacter, 50);
healCharacter(myCharacter, 30);
try {
  healCharacter(myCharacter, 30);
} catch ( error: any ) {
  console.error(error.message);
}


export {};