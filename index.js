// const fs = require('fs');
const path = require('path');
const { pathExist } = require('./func');

// Identificar si la ruta existe
// Si existe una ruta resolver la promesa
// resolve('Ruta exitosa');
// Si no existe la ruta se rechaza la promesa

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (pathExist(path)) {
    console.log("deberia llegar aqui ")
    resolve('Ruta existente')
      ;
  } else {
    reject('La ruta no existe');
  }
});


// leer archivo
// fs.readFile('prueba/ejem', 'utf-8', (error, data) => {
//   if (error) {
//     console.log('error numero 2')
//   }
//   console.log(data.toString())

// });

// console.log(fs.existsSync('prueba/ejemplo.md'));
// Chequear o convertir a una ruta ABSOLUTA
// const rutaAbsoluta = path.resolve('boing6prueba');
// console.log(rutaAbsoluta);

// Es formato md?
//

module.exports = {
  mdLinks,
};
