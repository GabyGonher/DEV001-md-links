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


// 5.- traer los links a un array.

const getLinks = (doc, filePath) => {
  // console.log(doc);
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
  // resolve(getStatus(arrLinks));
  // console.log(arrLinks);
  return arrLinks;
};


// 6. - Validar Links;


// pasar por cada uno de los links y aplicar esto
// Extraer links de array que contengan las caracteristicas de status y ok en un arr nuevo
// Axios  hace la petición a mis urls para ver si su contenido es correcto
// La función debe retornar una promesa que resuelva a un arreglo  de objetos


const getStatus = (arrLinks) => Promise.all(arrLinks.map((link) => axios.get(link.href)
  .then((respuesta) => {
    return { ...link, status: respuesta.status, message: 'ok' };
  })
  .catch((error) => {
    return { ...link, status: error.response.status, message: 'fail' };
  })

));

// const getStatus = arrLinks.map(link => {
//   return axios.get(link.href).then(linkrespuesta => {
//     return { ...link, status: respuesta.status, ok: linkrespuesta.statusText }
//   });
// Promise.all(getStatus).then(resultado => console.log(resultado));

// //////////////////////////////////////////////////////////
// const arrLinks = [
//   {
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     text: 'Markdown',
//     file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo2.md',
//     status: 200,
//     message: 'ok',
//   },
//   {
//     href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo2.md',
//     status: 200,
//     message: 'ok',
//   },
// ];

// ////////////////////////////////////////////////////////////



// });
// console.log(linkrespuesta);
// Promise.all(getStatus).then(resultado => console.log(resultado));
// console.log(getStatus(arrLinks));


// /////////////////////////////////////////////////////////////
// 4 .- Leer el archivo del arreglo si es formato md
const leerArchivo = (filePath) => {
  // const contentFile = [];
  return new Promise((resolvee, reject) => {
    // fs.readFile(filePath, 'utf8', (error, arr) => {
    readFile(filePath, 'utf8').then((contentFile) => {

      // console.log(contentFile);
      // resolvee(getLinks(contentFile, filePath));
      resolvee(contentFile);
      // console.log(contentFile, 'funciones');
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
// console.log('total links');
// console.log(totalLinks(arrLinks));

// Permite saber NUMERO DE LINK UNICOS
const unique = (links) => {
  const unicos = [...new Set(links.map((link) => link.href))];
  return unicos.length;
};
// console.log('links unicos');
// console.log(unique(arrLinks));
// permite saber NUMERO DE LINKS ROTOS
const brokenStats = (links) => {
  const broken = links.filter((link) => link.message === 'fail');
  return broken.length;
};
// console.log('links rotos');
// console.log(brokenStats(arrLinks));
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
