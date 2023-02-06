// const { readFile } = require("fs/promises");

// const { get } = require('http');
const { resolve } = require('path');
const { pathExist, pathAbsolute, fileMd, leerArchivo, getStatus, getLinks } = require('./func');

const mdLinks = (filePath, options = false) => new Promise((resolve, reject) => {
  console.log('inicio de recorrido');
  if (!pathExist(filePath)) {
    return reject('La ruta no existe');
  }
  const absolute = pathAbsolute(filePath);
  if (!fileMd(absolute)) {
    return reject('El archivo no es MD');
  }
  console.log('entra a leer el archivo');
  const resultLeerArchivo = leerArchivo(absolute);
  return Promise.all([resultLeerArchivo.then(content => {
    console.log(content);
    if (options === true) {
      console.log('arroja los links');
      return resolve(getLinks(content, absolute));

    } if (options === false) {
      console.log('validate');
      Promise.all(getStatus(absolute));
    }
  })]);

});
// --------------------- R E S U L T A D O S-------------------------------------------

// Permite conocer el NUMERO TOTAL de links
const totalLinks = (arrLinks) => {
  const total = arrLinks.length;
  return total;
};

// Permite saber NUMERO DE LINK UNICOS
const unique = (arrLinks) => {
  const unicos = new Set(arrLinks.map((link) => link.href)).size;
  return unicos;
};
// permite saber NUMERO DE LINKS ROTOS
const brokenStats = (arrLinks) => {
  const broken = arrLinks.filter((link) => link.message === 'fail');
  return broken.length;
};
// ------------------------------------------------------------------------------------
module.exports = {
  mdLinks,
  totalLinks,
  unique,
  brokenStats,
};