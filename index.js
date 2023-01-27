const { pathExist, pathAbsolute, fileMd, readFile, getLinks, } = require('./func');

const mdLinks = (filePath, options) => new Promise((resolve, reject) => {
  // const rutaAbsoluta = pathAbsolute(filePath);
  // // console.log(rutaAbsoluta);
  let absolute = [];
  // let resultAbsolut = '';
  console.log('inicio de recorrido');
  if (!pathExist(filePath)) {
    // console.log('ruta existente');
    return reject('La ruta no existe');
  } else {
    absolute = pathAbsolute(filePath);
    console.log(`${filePath} convertir a absoluta`);
  }
  if (!fileMd(filePath)) {
    console.log('Entrando a ERROR archivo md');
    return reject(`${filePath} La ruta no contiene un archivo md`);
  }
  const arrFile = readFile(filePath))
if (arrFile.getLinks) {
  const arraLinks = 
      }
    }



  // desde aca.

  // desde aqui es lo nuevo -- If que lee el arreglo y aplica la extracción de links

  // (!fileMd(resultAbsolut) ? reject(`${filePath} La ruta no contiene un archivo md`) : filePath = [mdPath]); //duda de si se cambia el parametro filepath vs resultadoAbsolut


  //   console.log('fin de recorrido');
  //   // return resolve(readFile['']);
});

module.exports = {
  mdLinks,
}