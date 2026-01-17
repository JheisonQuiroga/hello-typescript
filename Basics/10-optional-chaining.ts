
interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Duban",
}

const passenger2: Passenger = {
  name: "Clara",
  children: ["Anderson", "Duban"],
}

// Optionl chaining

const printChildren = ( passenger: Passenger ): void => {
  const howManyChildren = passenger.children?.length ?? 0;
  
  // not null assertion operator (!)
  
  /* Le indica a TypeScript que estamos seguros que el valor no será 
  null o undefined en ese punto, por lo que no lanzará un error de compilación. */

  const namePassenger = passenger.name!;

  // const firstChild = passenger.children!.length;
  console.log(namePassenger);
  console.log( howManyChildren );
  // console.log( firstChild );
}

console.log("Hola mundo desde TypeScript");
printChildren( passenger1 );
printChildren( passenger2 );