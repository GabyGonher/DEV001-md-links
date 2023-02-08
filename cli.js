const {
  totalLinks,
  unique,
  brokenStats, } = require('./func');

const { mdLinks, } = require('./index');
const colors = require('colors');

const figlet = require("figlet");


const path = process.argv[2];
const stats = process.argv.includes('--stats');
const validate = process.argv.includes('--validate');
const options = {
  validate,
  stats,
};
// console.log(process.argv.includes('--validate'));
if (path === undefined) {
  figlet(`Bienvenida  a  MdLinks`, (err, result) => {
    console.log(colors.rainbow(err || result));
    console.log(colors.magenta.bold(`INSTRUCCIONES DE USO:`));
    console.log(colors.magenta.bold(`La ruta de los archivos a analizar deberá ingresarse a tráves de la terminal.`));
    console.log(colors.magenta.bold(`Para ingresar tu archivo y ver los links que contiene, puedes comenzar con: node cli.js + la ruta de tu archivo`));
    console.log(colors.magenta.bold(`COMANDOS:`));
    console.log(colors.magenta.bold(`--validate para obtener links validados`));
    console.log(colors.magenta.bold(`--stats para obtener estadísticas de los links`));
    console.log(colors.magenta.bold(`--validate --stats para obtener links validaos con estadísticas`));
  });
}



// console.log(path);
const lineComand = (path) => {
  mdLinks(path, options).then((arrLinks) => {
    console.log(arrLinks);
    if (stats) {
      console.log(colors.rainbow(`ESTADÍSTICAS`));
      console.log(colors.bgCyan(`TOTAL DE LINKS:${totalLinks(arrLinks)}`));
      console.log(colors.bgYellow(`LINKS ÚNICOS:${unique(arrLinks)}`));
      console.log(colors.bgMagenta(`LINKS ROTOS:${brokenStats(arrLinks)}`));
    }
  }).catch(console.error);
};

lineComand(path);


// --------------- F U N C I O N A M I E N T O --------------------------------
// SE EJECUTA CON: md - links < path - to - file > [options]
// --validate permite obtener links que funcionan(arroja links OK)
// if (validate)
// --stats permite obtener estadisticas de los links ingresados
// --stats y--validate: estadisticas y validación.


// ---------------------I N S T R U C C I O N E S ------------------------------
// /////////////////////////////////////////////////////////////////////////////////////
// El ejecutable de nuestra aplicación debe poder
// ejecutarse de la siguiente manera a través de la terminal.
// md - links < path - to - file > [options]

// Módulo instalable via npm install < github - user > /md-links

// --validate permite obtener links que funcionan(arroja links OK)
// --stats permite obtener estadisticas de los links ingresados
//   Total: 3
//   Unique: 3
// --

// * Se puede comninar--stats y--validate
//   Que permitira obtener estadisticas que necesiten de los resultados de la validación.
//   Total: 3
//   Unique: 3
//   Broken: 1.