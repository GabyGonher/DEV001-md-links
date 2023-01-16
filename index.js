const fs = require('fs');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // Que cosas llenamos en nuestra funcion (ocupar llenado de flujo)
  // Identificar si la ruta es relativa o absoluta
  // Si la ruta existe
  if (fs.existsSync(path)) {
    // Chequear o convertir a una ruta absoluta (archivos vs directorios)
    // Probar si la ruta es un archivo o directorio
    // Si es un directorio filtrar los archivos md a un array
  } else {
    // Si no existe la ruta se rechaza la promesa
    reject('La ruta no existe');
  }
});

module.exports = {
  mdLinks,
};
