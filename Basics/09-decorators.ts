// Decorators

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    myProperty = "Decorated Property";
    print() {
      console.log('Hello from the decorated class!');
    }
  }
}

@classDecorator
class SuperClass {
  public myProperty?: string = "Hello World";

  constructor(myProperty: string) {
    this.myProperty = myProperty;
  }

  public print() {
    console.log('Hello from SuperClass');
  }
}

const myclass = new SuperClass("Hi there!");
console.log({myclass});
console.log(myclass.myProperty);
myclass.print();
