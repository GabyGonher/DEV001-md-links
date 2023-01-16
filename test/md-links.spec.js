const { mdLinks } = require('../index.js');

describe('mdLinks', () => {
  it('deberia ser una funcion', () => {
    console.log('FIX ME!');
  });
  // it('deberia devolver una promesa', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });
  it('Deberia rechazar la promesa cuando el path no existe', () => mdLinks('hola/noexiste/error.md').catch((error) => {
    expect(error).toBe('La ruta no existe');
  }));
}); 