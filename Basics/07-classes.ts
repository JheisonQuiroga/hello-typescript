export class Person {

  // Properties
  public name?: string;
  public lastName: string;
  // es lo mismo a age?: number;
  private age: number | undefined;

  // Constructor
  constructor( name: string, lastName:string, age?: number ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age || 0;
  }

  // Methods
  public greet(): string {
    return `Hello, my name is ${ this.name } and I am ${ this.age } years old!`;
  }
}

// Inheritance

// class Hero extends Person {

//   constructor(private power: string, public realName: string, age?: number ) {
//     super( realName, age );
//     this.power = power;
//   }

//   public showPower(): string {
//     return `My power is ${ this.power}`;
//   }
// }

// Composition over Inheritance

class Hero {

  public person: Person;

  constructor(private power: string, public realName: string, person: Person, age?: number ) {
    this.person = person;
    this.power = power;
  }

  public showPower(): string {
    return `My power is ${ this.power}`;
  }
}

const tony = new Person('Tony', 'Stark', 45);
console.log(tony.name);
// console.log(bruceWayne.age);
console.log(tony.greet());

const ironman = new Hero('Technology', 'Ironman', tony, 45);
// console.log(ironman.greet());
console.log(ironman.showPower());
