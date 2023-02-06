/* eslint-disable no-undef */
// const { rejects } = require('assert');
const fs = require('fs');
const { readFile } = require('fs/promises');
const { resolve } = require('path');
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
// ////////////////////////777
// let arrLinks = [
//   {
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     text: 'Markdown1',
//     file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md',
//   },
//   {
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     text: 'Markdown2',
//     file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md',
//   },
//   {
//     href: 'https://es.wikipedia.org/wiki/Markzgfz',
//     text: 'Markdown3',
//     file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md',
//   },
// ];


// Options: si options validate es = false ejecuta.
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
// console.log(getStatus);

// getStatus(arrLinks).then((resolve) => console.log((resolve)));

// ////////////////////////////////////////////////////////////
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
    })
      .catch(error => {
        reject('Error al leer archivo');
      });
  });
};
// readFile('C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md');

module.exports = {
  pathExist,
  pathAbsolute,
  fileMd,
  leerArchivo,
  getLinks,
  getStatus,

};
