// Se van a leer los argumentos de linea de comando y pasar a mdLinks (todo lo de consola)
// CLI = Linea de comando
const { mdLinks } = require('./index');

mdLinks('noexistemd').then(() => { })
  .catch((error) => {
    console.log(error);
  });
