const fs = require('fs');
const path = require('path');

// 1.- Funcion para  saber si existe una ruta
const pathExist = (filephat) => {
  return fs.existsSync(path, 'utf8');
};

// const pathExist = (path) => fs.existsSync(path);
// console.log(pathExist);

// 2.- Funcion para identificar una ruta absoluta
const pathAbsolute = (file) => {
  return path.isAbsolute(file);
};

// 3.- Identificar si es un archivo o directorio.
// 4.- Identificar si tiene formato md.
// 5.- Leer cada archivo del arreglo.

module.exports = {
  pathExist, pathAbsolute,
};