const fs = require('fs');
const path = require('path');

// 1.- Funcion para  saber si existe una ruta
const pathExist = (filePath) => fs.existsSync(filePath);
// console.log(pathExist)
// const pathExist = (path) => fs.existsSync(path);
// console.log(pathExist);

// 2.- Funcion para identificar una ruta absoluta
const pathAbsolute = (filePath) => (
  path.isAbsolute(filePath) ? filePath : path.resolve(filePath)
);
// console.log(pathAbsolute('prueba/ejemplo2.md'));
console.log(path.dirname('olaKase/xd.md'));

// 3.- Identifi)car si es un archivo o directorio
const isFile = (fileName) => path.extname(fileName);

// 4.- Identificar si tiene formato md.
// 5.- Leer cada archivo del arreglo.

module.exports = {
  pathExist,
  pathAbsolute,
  isFile,
};
