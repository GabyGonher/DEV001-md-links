/* eslint-disable no-undef */
const { rejects } = require('assert');
// const { log } = require('console');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
// const { fetch } = require('node-fetch');
const axios = require('axios');
const { mdLinks } = require('.');

// 1.- Funcion para  saber si existe una ruta
const pathExist = (filePath) => fs.existsSync(filePath);

// 2.- Funcion para identificar una ruta absoluta
const pathAbsolute = (filePath) => (
  path.isAbsolute(filePath) ? filePath : path.resolve(filePath)
);
// console.log(pathAbsolute('jemplo2'));

// 3.- Identificar si es un archivo formato md en caso de ser directorio error
const fileMd = (filePath) => path.extname(filePath) === '.md';
// console.log('HASTA AQUI 1')
// console.log(fileMd('prueba/ejemplo2.md'));
// console.log('HASTA AQUI 2')

// const fileMd = (filePath) => (
// path.extname(filePath) === '.md' ? []
// )


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
  // console.log(arrLinks);
  // return arrLinks;
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


// Options: si options validate es = false ejecuta 
// 6. - Validar Links;
// pasar por cada uno de los links y aplicar esto
// Extraer links de array que contengan las caracteristicas de status y ok en un arr nuevo
// Axios  hace la petición a mis urls para ver si su contenido es correcto
// La función debe retornar una promesa que resuelva a un arreglo  de objetos

const validateLinks = (arrLinks) => Promise.all(arrLinks.map((link) => axios.get(link.href)
  .then((respuesta) => {
    // const { status } = respuesta;
    console.log(respuesta.status);
    return { ...link, status: respuesta.status, message: 'ok' };
  })
  .catch((error) => {
    console.log(error);
    // console.log(link.href, error.response.status);
    return { ...link, status: error.response.status, message: 'fail' };
  })));
validateLinks(arrLinks).then((resolve) => console.log((resolve)));


// ////////////////////////////////////////////////////////////


// //////////////////////////////////////////
// const validateLinks = (arrLinks) => {
//   const arrProm = [];
//   const exp = /(\[(.*?)\])(\((.*?)\))/gim;
//   let valid = exp.exec(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (valid !== null) {
//       let validated = valid;
//       arrProm.push(axios.get(valid[4]).then((response) => {
//         return {
//           href: validated[4],
//           text: validated[2],
//           file: filePath,
//           status: response.status,
//           ok: (response.ok) ? 'ok' : 'fail',
//         }
//       }))
//       valid = exp.exec(arr);
//       console.log(valid, 'valida links');
//     }
//   }
//   // return valid;
//   return Promise.all(promises);
// };
// readFile('C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md');
// ////////////////////////////////////////

// 



// 4 .- Leer el archivo del arreglo si es formato md
const readFile = (filePath) => {
  const contentFile = [];
  return new Promise((resolvee, reject) => {
    fs.readFile(filePath, 'utf8', (error, arr) => {
      if (error) {
        reject('Error al leer archivo');
      } else {
        // resolvee(validateLinks(arr, filePath));
        resolvee(getLinks(arr, filePath));
      }
    });
  });
};
// const filePath = 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md';
readFile('C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md');
// console.log(filePath);

module.exports = {
  pathExist,
  pathAbsolute,
  fileMd,
  readFile,
  getLinks,

};
