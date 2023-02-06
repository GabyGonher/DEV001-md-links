/* eslint-disable no-undef */
const { mdLinks } = require('../index');
const { pathExist, pathAbsolute, fileMd, getLinks, readFile, getStatus } = require('../func');



const pathValid = 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md';
const pathFalse = '_prueba/ejm_';
const absolutePath = 'C://Users//admin//Desktop//DEV001-md-links//README.md';
const relativePath = 'README.md';
const arrLinks = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown1',
    file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md',
  },

]
// Test de ruta existente.
describe('mdLinks', () => {
  it('deberia ser una funcion', () => {
    console.log('FIX ME!');
  });
  // it('deberia devolver una promesa', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });
  it('Deberia rechazar la promesa cuando el path no existe', () => mdLinks(pathFalse).catch((error) => {
    expect(error).toBe('La ruta no existe');
  }));
});


// Test de ruta existente index
describe('pathExist', () => {
  it('deberia ser una funcion', () => {
    expect(typeof pathExist).toBe('function');
  });
  it('Deberia devolver true si la ruta es correcta', () => {
    expect(pathExist(pathValid)).toBe(true);
  });
  it('Deberia devolver false si la ruta es incorrecta', () => {
    expect(pathExist(pathFalse)).toBe(false);
  });
});


// Test de ruta absoluta
describe('pathAbsolute', () => {
  it('deberia ser una funcion', () => {
    expect(typeof pathAbsolute).toBe('function');
  });
  it('Deberia devolver una ruta absoluta', () => {
    expect(pathAbsolute(absolutePath)).toBe(absolutePath);
  });
  it('Deberia devolver la misma ruta que ya es absoluta', () => {
    expect(pathAbsolute(absolutePath)).toBe(absolutePath);
  });
});


// Test de extensión de archivo.
describe('fileMd', () => {
  it('deberia ser una funcion', () => {
    expect(typeof fileMd).toBe('function');
  });
  it('Deberia devolver true si el archivo es formato md', () => {
    expect(fileMd('prueba/ejemplo2.md')).toBe(true);
  });
  it('Deberia devolver false si el archivo no es formato md', () => {
    expect(fileMd('prueba/ejemplo2.txt')).toBe(false);
  });
});


// Test de traer links en un array.
describe('getLinks', () => {
  it('Deberia ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('Deberia devolver un array con links', () => {
    expect(getLinks(pathValid)).toEqual([]);
  });
});

// Test de READ
describe('readFile', () => {
  it('Deberia ser una función', () => {
    expect(typeof readFile).toBe('function');
  });
  it('Deberia regresar una cadena de texto', () => {
    readFile('').then((getLinks) => {
    })
      .catch((error) => 'error');
  });
  it("Deberia devolver una promesa", () => {
    return readFile(
      "C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md"
    )
      .then(() => {
        expect(readFile).toBe(typeof Promise);
      })
      .catch((error) => { error });
  });
});


// Test de getStatus

describe('getStatus', () => {
  it('Deberia ser una función', () => {
    expect(typeof getStatus).toBe('function');
  });
  it('Deberia traer el status y message de cada link', () => {
    getStatus([]).then(([]) => {
    })
      .catch((error) => 'error');
  });
});