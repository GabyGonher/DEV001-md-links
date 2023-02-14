const { pathExist, pathAbsolute, fileMd, leerArchivo, getStatus, getLinks } = require('./func');

const mdLinks = (filePath, options) => new Promise((resolve, reject) => {
  if (!pathExist(filePath)) {
    reject('La ruta no existe');
  }
  const absolute = pathAbsolute(filePath);
  if (!fileMd(absolute)) {
    reject('El archivo no es MD');
  }
  return leerArchivo(absolute).then(content => {
    const arrLinks = getLinks(content, absolute);
    if (options.validate === false) {
      resolve(arrLinks);
    } else if (options.validate === true) {
      resolve(getStatus(arrLinks));
    }
  });

});
module.exports = {
  mdLinks,
};