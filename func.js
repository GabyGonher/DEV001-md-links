const fs = require('fs');
const path = require('path');

// 1.- Funcion para  saber si existe una ruta
const pathExist = (phat) => fs.existsSync(phat);

// const pathExist = (path) => fs.existsSync(path);
// console.log(pathExist);

// 2.- Funcion para identificar una ruta absoluta
const pathAbsolute = (phat) => phat.isAbsolute(phat);


// 3.- Identificar si es un archivo o directorio.
// 4.- Identificar si tiene formato md.
// 5.- Leer cada archivo del arreglo.

module.exports = {
  pathExist, pathAbsolute,
};