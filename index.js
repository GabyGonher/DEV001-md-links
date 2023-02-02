//const { readFile } = require("fs/promises");

const { resolve } = require("path");
const { pathExist,
  pathAbsolute,
  fileMd,
  readFile,
} = require('./func');

const mdLinks = (filePath, options) => new Promise((resolve, reject) => {
  console.log(filePath)
  // const rutaAbsoluta = pathAbsolute(filePath);
  // // console.log(rutaAbsoluta);
  let absolute = [];
  // let resultAbsolut = '';
  console.log('inicio de recorrido');
  if (!pathExist(filePath)) {
    console.log('ruta que se le pasa');
    return reject('La ruta no existe');
  } else {
    // `Ruta existente`;
    absolute = pathAbsolute(filePath);
    console.log(filePath, 'ruta absoluta')
    // console.log(`${filePath} convertir a absoluta`);
  }
  if (!fileMd(filePath)) {
    console.log('Entrando a ERROR archivo md');
    return reject(`${filePath} La ruta no contiene un archivo md`);
  }
  console.log('comienza a leer el archivo');
  resolve(readFile(filePath))

  // return
  // let content = readFile(filePath).then(result => getLinks(result));
  // resolve(content); * /
  // console.log(result);


  let links = getLinks(content, filePath);

  // console.log(getLinks);
  console.log(content);
  // return resolve(links);
  // // return resolve(readFile['']);
});

//   console.log('fin de recorrido');
module.exports = {
  mdLinks,
};