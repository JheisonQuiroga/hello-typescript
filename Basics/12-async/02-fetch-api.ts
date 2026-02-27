import 'dotenv/config';

(()=> {
  
  const apiKey = process.env.API_KEY;
  // console.log(apiKey);
  const response = fetch(`https://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=${apiKey}`);
  
  // res.json() retorna una promesa que se resuelve con el cuerpo de la respuesta parseado como un JSON
  // Por lo tanto, se encadena con otro .then() para manejar el resultado de esa promesa.
  response
    .then((res) => res.json())
    .then((data) => {
      const { lat, lon } = data[0];
      // console.log(`Latitud: ${lat}, Longitud: ${lon}`);
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`; 
      const secondResponse = fetch(url);
      return secondResponse;
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
    
})();

export {};