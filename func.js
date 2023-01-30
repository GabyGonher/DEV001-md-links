const { log } = require('console');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
// const fsPromises = require('fs/promises');
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
  return arrLinks;
};

// 4 .- Leer el archivo del arreglo si es formato md
const readFile = (filePath) => {
  const contentFile = [];
  fs.readFile(filePath, 'utf8', (error, lineRead) => {
    if (error) {
      throw new Error('error al leer archivo');
    } else {
      // contentFile.push(lineRead);
      getLinks(lineRead, filePath);
    }
    // return getLinks;
    return contentFile;
  });
};

// 6.- Validar Links;
const validateLinks = (arrLinks) => { }





// console.log('Funcion REad');
readFile('C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md');

module.exports = {
  pathExist,
  pathAbsolute,
  fileMd,
  readFile,
  getLinks,

};
