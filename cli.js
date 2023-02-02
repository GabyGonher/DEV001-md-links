// Se van a leer los argumentos de linea de comando y pasar a mdLinks (todo lo de consola)
// CLI = Linea de comando
const { mdLinks } = require('./index');

mdLinks('C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md')
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error);
  });
// 'prueba/ejemplo.txt'
// 'README.md'
// 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md'