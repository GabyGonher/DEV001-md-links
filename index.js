
const { pathExist, pathAbsolute, fileMd, leerArchivo, getStatus, getLinks } = require('./func');
// import {
//   pathExist, pathAbsolute, fileMd, leerArchivo, getStatus, getLinks,
// } from './func.js';
const mdLinks = (filePath, options) => new Promise((resolve, reject) => {
  // console.log(filePath, 'inicia el recorrido');
  if (!pathExist(filePath)) {
    reject('La ruta no existe');
  }
  const absolute = pathAbsolute(filePath);
  if (!fileMd(absolute)) {
    reject('El archivo no es MD');
  }
  // console.log('entra a leer el archivo');
  // const resultLeerArchivo = leerArchivo(absolute);
  // console.log(resultLeerArchivo, 'RESULTADO DE LEER ARCHIVO');
  return leerArchivo(absolute).then(content => {
    // console.log(content);
    // console.log(options.validate, 'option');
    const arrLinks = getLinks(content, absolute);
    if (options.validate === false) {
      resolve(arrLinks);
      // console.log(absolute.validate, 'absolute');
    } else if (options.validate === true) {
      // console.log('validate');
      resolve(getStatus(arrLinks));
    }
  });

});


module.exports = {
  mdLinks,

};