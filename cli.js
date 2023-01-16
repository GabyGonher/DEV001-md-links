// Se van a leer los argumentos de linea de comando y pasar a mdLinks
const { mdLinks } = require('./index');

mdLinks('/noexiste/').then(() => { })
  .catch((error) => {
    console.log(error);
  });
