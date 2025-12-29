export class Person {

  // Properties
  public name?: string;
  // es lo mismo a age?: number;
  private age: number | undefined;

  // Constructor
  constructor( name: string, age?: number ) {
    this.name = name;
    this.age = age || 0;
  }

  // Methods
  public greet(): string {
    return `Hello, my name is ${ this.name } and I am ${ this.age } years old!`;
  }
}

// Inheritance

class Hero extends Person {

  constructor(private power: string, public realName: string, age?: number ) {
    super( realName, age );
    this.power = power;
  }

  public showPower(): string {
    return `My power is ${ this.power}`;
  }
}

const bruceWayne = new Person('Bruce Wayne');
console.log(bruceWayne.name);
// console.log(bruceWayne.age);
console.log(bruceWayne.greet());

const ironman = new Hero('Technology', 'Ironman', 45);
console.log(ironman.greet());
console.log(ironman.showPower());
