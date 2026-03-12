import type { PokemonData } from "./02-interfaces-data.js";

// Async / Aait
/* Promesa que resuelve un objeto de tipo PokemonData, que es el tipo de dato que se espera
  recibir de la API. */

const getPokemonData = async (pokemonName: string): Promise<PokemonData> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching data for ${pokemonName}: ${response.status}`);
    }

    const data = (await response.json() as PokemonData);
    return data;
  } catch (error) {
    console.log((error as Error).message);
    throw error; // Re-lanzando el error para que pueda ser manejado al llamar a la función
  }
}

/* 
  Cuando el argumento de la función es utilizado unicamente como arguento de otra función,
  se puede omitir y pasar la referencia de la función directamente. Aplica tambien siempre y 
  cuando se envien en el mismo orden 
*/

getPokemonData('pikachu').then(console.log)

const myArray = ["Banana", "Strawberry", "Watermelon"]

// Esto imprime el valor, indice, y el array respectivamente.
myArray.forEach(console.log);