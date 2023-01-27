const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
// const promises = require('node:fs/promises');

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
// 5.- Leer el archivo del arreglo si es formato md
const readFile = (filePath) => {
  const contentFile = [];
  fs.readFile(filePath, (error, lineRead) => {
    if (error) {
      throw new Error('error al leer archivo');
    } else {
      contentFile.push(lineRead);
      // getLinks(lineRead, filePath);
    }
    return contentFile;
  });
};
readFile('C://Users//admin//Desktop//DEV001-md-links//README.md', 'READFILE');

// 6.- traer los links a un array.

const getLinks = (currentLine, filePath) => {
  console.log(currentLine);
  const arrLinks = [];
  const regex = /(\[(.*?)\])(\((.*?)\))/gim;
  let match = regex.exec(currentLine); // resultado de documentos md como parametro
  for (let i = 0; i < currentLine.length; i++) {
    if (match !== null) {
      arrLinks.push({
        href: match[4],
        text: match[2],
        file: filePath,
      });
      match = regex.exec(currentLine);
    }
  }
  console.log(arrLinks);
  return arrLinks;
};

// DESDE AQUI PARA ABAJO
// getLinks('C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo2.md');

// const getLinks =
// console.log(readFile('C://Users//admin//Desktop//DEV001-md-links//README.md'));

module.exports = {
  pathExist,
  pathAbsolute,
  fileMd,
  readFile,
  getLinks,

};
