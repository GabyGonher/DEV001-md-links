// const fs = require('fs');
// const path = require('path');
const { pathExist, pathAbsolute, fileExt } = require('./func');

// Identificar si la ruta existe
// Si existe una ruta resolver la promesa
// resolve('Ruta exitosa');
// Si no existe la ruta se rechaza la promesa

const mdLinks = (filePath, options) => new Promise((resolve, reject) => {
  // const rutaAbsoluta = pathAbsolute(filePath);
  // // console.log(rutaAbsoluta);
  // let files;
  console.log('inicio de recorrido');
  if (!pathExist(filePath)) {
    // console.log('ruta existente');
    return reject('La ruta no existe');
  }
  // if (!pathAbsolute(filePath)) {
  // pathAbsolute(filePath);
  filePath = pathAbsolute(filePath);
  console.log(`${filePath} convertir a absoluta`);
  if (!fileExt(filePath)) {
    console.log('archivo md');
    return reject(`${filePath} La ruta no contiene un archivo md`);
  }
  console.log('fin de recorrido');
  return resolve([]);
});

// if (!pathExist(filePath)) {
//   return reject('La ruta no existe');
// } else {
//   const absolut = pathAbsolute(filePath);
// }
// if (!pathAbsolute(filePath)) {
//   return reject('esta ruta no es absoluta');
// }
// if (!fileExt(filePath)) {
//   return reject('La ruta no contiene un archivo md');
// }
// resolve([])
// });

// /////////////////
// if (pathExist(filePath)) {
//   resolve('Ruta exitosa');
// } else {
//   reject('La ruta no existe');
// }
// });
// .then(isPath => console.log('Log de THEN: ' + isPath)
// ).then

//* if (fileExt(filePath) === true )
// reject('Archivo .md') */

// leer archivo.
module.exports = {
  mdLinks,
};
