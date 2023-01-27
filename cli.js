// Se van a leer los argumentos de linea de comando y pasar a mdLinks (todo lo de consola)
// CLI = Linea de comando
const { mdLinks } = require('./index');

mdLinks('prueba/ejemplo2.md')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
// 'prueba/ejemplo.txt'
