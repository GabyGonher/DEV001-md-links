const process = require('process');
// Se van a leer los argumentos de linea de comando y pasar a mdLinks (todo lo de consola)
// CLI = Linea de comando

const { mdLinks, } = require('./index');
// totalLinks, unique, brokenStats 
// const { chalk } = require("chalk");
// const figlet = require("figlet");


// const route = process.argv[2];
// const num = process.argv.slice(2);
// const stats = num.includes('--stats');
// const valid = num.includes('--validate');


// if (valid && !stats) {
//   mdLinks(path, { validate: valid }).then((links) => {
//     console.log(result);
//   })
// }

// /////////////////////////////////////

// mdLinks(path, {validate: valid}), validate)
mdLinks('C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo2.md')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
// 'prueba/ejemplo.txt'
// 'C:\Users\admin\Desktop\DEV001-md-links\prueba\ejemplo2.md'
// 'README.md'
// 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md'

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
//   Broken: 1


// --------------- B I E N V E N I D A -------------------------------------
// figlet('Bienvenid@a Md - Links en español!', (err, result) => {
//   console.log(err || result);
// })

// const welcome = () => {
//   console.log(chalk.blue('Bienvenid@ a Md-Links en español!'));
//   console.log(chalk.gray('Prueba '));
//   console.log(gradient.passion('HOLIIIIIII'));
// }
// console.log(welcome);

// console.log(chalk.blue('--validate permite obtener links que funcionan'));
// console.log('--stats permite obtener estadisticas de los links ingresados');
// console.log('--stats y--validate Si desea obtener.
//resultados de la validación con estadisticas que necesiten');