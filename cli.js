// Se van a leer los argumentos de linea de comando y pasar a mdLinks (todo lo de consola)
const { mdLinks } = require('./index');

mdLinks('prueba/ejemplo2.md').then(() => { })
  .catch((error) => {
    console.log(error);
  });
