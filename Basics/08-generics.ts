// Generics

/* Los genericos se usan para saber el tipo de dato que se va a manejar
en una función o clase ** */

// !NOTA: Los genericos se representan con la letra T (Type), sin embargo
// !puede ser cualquier letra o palabra que se desee usar, any no es muy recomentable
// !ya que pierde la ventaja de los tipos de datos en TypeScript.

function whatIsMyTypeWithAny( argument: any ): any {
  return argument;
}

function whatIsMyType<T>( argument: T ): T {
  return argument;
}

let iAmString = whatIsMyType<string>('Hello World');
console.log(iAmString.charAt(0)); // Infiere correctamente el tipo de dato

let iAmNumber = whatIsMyType<number>(100);
console.log(iAmNumber.toFixed(2));
console.log(typeof iAmNumber.toFixed(2));

let iAmArray = whatIsMyType<number[]>([1, 2, 3, 4, 5]);
console.log(iAmArray.length);


export {}