const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("Promesa exitosa")
    } else {
      reject("Promesa fallida")
    }
  }, 2000);
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Promesa finalizada"));