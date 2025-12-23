import './02-object-interface';

const name: string = "Duban";
let hpPoints: number | 'FULL' = 100;
let isAlive: boolean = true;

hpPoints = 'FULL';


console.log({
  name,
  hpPoints,
  isAlive,
});

// Se utiliza el export para convertir el archivo en un módulo.
export {};