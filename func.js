/* eslint-disable no-undef */
const fs = require('fs');
const { readFile } = require('fs/promises');
const path = require('path');
const axios = require('axios');

// 1.- Funcion para  saber si existe una ruta
const pathExist = (filePath) => fs.existsSync(filePath);

// 2.- Funcion para identificar una ruta absoluta
const pathAbsolute = (filePath) => (
  path.isAbsolute(filePath) ? filePath : path.resolve(filePath));

// 3.- Identificar si es un archivo formato md en caso de ser directorio error
const fileMd = (filePath) => path.extname(filePath) === '.md';

// 5.- Funcion que permite traer los links a un array.

const getLinks = (doc, filePath) => {
  const arrLinks = [];
  const regex = /(\[(.*?)\])(\((.*?)\))/gim;
  let match;
  while ((match = regex.exec(doc)) !== null) {
    arrLinks.push({
      href: match[4],
      text: match[2],
      file: filePath,
    });
  }
  return arrLinks;
};


// 6. - Validar Links;
const getStatus = (arrLinks) => Promise.all(arrLinks.map((link) => axios.get(link.href)
  .then((respuesta) => {
    return { ...link, status: respuesta.status, message: 'ok' };
  })
  .catch((error) => {
    return { ...link, status: error.response.status, message: 'fail' };
  })

));


// 4 .- Leer el archivo del arreglo si es formato md
const leerArchivo = (filePath) => {
  return new Promise((resolvee, reject) => {
    readFile(filePath, 'utf8').then((contentFile) => {
      resolvee(contentFile);
    })
      .catch(error => {
        reject(error, 'Error al leer archivo');
      });
  });
};

// Permite conocer el NUMERO TOTAL de links
const totalLinks = (links) => {
  const total = links.length;
  return total;
};

// Permite saber NUMERO DE LINK UNICOS
const unique = (links) => {
  const unicos = [...new Set(links.map((link) => link.href))];
  return unicos.length;
};

// Permite saber NUMERO DE LINKS ROTOS
const brokenStats = (links) => {
  const broken = links.filter((link) => link.message === 'fail');
  return broken.length;
};

// ------------------------------------------------------------------------------------

module.exports = {
  pathExist,
  pathAbsolute,
  fileMd,
  leerArchivo,
  getLinks,
  totalLinks,
  unique,
  brokenStats,
  getStatus,

};
