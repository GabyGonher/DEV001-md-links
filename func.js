const fs = require('fs');
const path = require('path');
// const promises = require('node:fs/promises');

// 1.- Funcion para  saber si existe una ruta
const pathExist = (filePath) => fs.existsSync(filePath);

// 2.- Funcion para identificar una ruta absoluta
const pathAbsolute = (filePath) => (
  path.isAbsolute(filePath) ? filePath : path.resolve(filePath)
);
// console.log(pathAbsolute('jemplo2'));

// 3.- Identificar si es un archivo formato md en caso de ser directorio error
const fileExt = (filePath) => path.extname(filePath) === '.md';
console.log(fileExt('prueba/ejemplo2.txt'));

// 5.- Leer el archivo del arreglo si es formato md
// const leer = fs.readFile('C://Users//admin//Desktop//DEV001-md-links//README.md', 'utf - 8', (error, data) => {
//   if (data) {
//     console.log(leer(data));
//   }
// })

// const leer = (filePath) => fs.readFile(filePath, function (error, data) {
// console.log(leerFile('C://Users//admin//Desktop//DEV001-md-links//README.md'));
// console.log(error);
// console.log(data);
// });

// const leerFile = (filePath) => fs.readFile(filePath, 'utf8');
// console.log(leerFile('C://Users//admin//Desktop//DEV001-md-links//README.md'));

// const readFile = (fileName) => path.readFile(fileName);
// console.log(readFile('C://Users//admin//Desktop//DEV001-md-links//README.md'))

module.exports = {
  pathExist,
  pathAbsolute,
  fileExt,
  // leer,

};
