/* eslint-disable no-undef */
// const { pathExist } = require('../index.js');
const { mdLinks } = require('../index');
const { pathExist, pathAbsolute, fileMd, readFile, getLinks } = require('../func');

// Test de ruta existente.
describe('mdLinks', () => {
  it('deberia ser una funcion', () => {
    console.log('FIX ME!');
  });
  // it('deberia devolver una promesa', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });
  it('Deberia rechazar la promesa cuando el path no existe', () => mdLinks('noexiste/err').catch((error) => {
    expect(error).toBe('La ruta no existe');
  }));
});
// Test de ruta existente index
describe('pathExist', () => {
  it('deberia ser una funcion', () => {
    expect(typeof pathExist).toBe('function');
  });
});

// Test de ruta absoluta
describe('pathAbsolute', () => {
  it('deberia ser una funcion', () => {
    expect(typeof pathAbsolute).toBe('function');
  });
  it('Deberia devolver una ruta absoluta', () => {
    expect(pathAbsolute('C://Users//admin//Desktop//DEV001-md-links//README.md')).toBe('C://Users//admin//Desktop//DEV001-md-links//README.md');
  });
  it('Deberia devolver la misma ruta que ya es absoluta', () => {
    expect(pathAbsolute('C://Users//admin//Desktop//DEV001-md-links//README.md')).toBe('C://Users//admin//Desktop//DEV001-md-links//README.md');
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
    expect(getLinks('C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md')).toEqual([{
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown1',
      file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md'
    }]);
  });

});

// Test de READ
describe('readFile', () => {
  it('Deberia ser una función', () => {
    expect(typeof readFile).toBe('function');
  });
});