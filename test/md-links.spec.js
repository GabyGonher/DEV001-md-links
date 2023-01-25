/* eslint-disable no-undef */
// const { pathExist } = require('../index.js');
const { mdLinks } = require('../index');
const { pathExist, pathAbsolute, fileExt } = require('../func');

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
describe('fileExt', () => {
  it('deberia ser una funcion', () => {
    expect(typeof fileExt).toBe('function');
  });
  it('Deberia devolver true si el archivo es formato md', () => {
    expect(fileExt('prueba/ejemplo2.md')).toBe(true);
  });
  it('Deberia devolver false si el archivo no es formato md', () => {
    expect(fileExt('prueba/ejemplo2.txt')).toBe(false);
  });
});
