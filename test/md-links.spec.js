/* eslint-disable no-undef */
const { mdLinks } = require('../index');
const { pathExist, pathAbsolute, fileMd, getLinks, leerArchivo, getStatus, totalLinks, unique, brokenStats } = require('../func');



const pathValid = 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo3.md';
const pathFalse = '_prueba/ejm_';
const absolutePath = 'C://Users//admin//Desktop//DEV001-md-links//README.md';
const arrLinks = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo2.md',
    status: 200,
    message: 'ok',
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo2.md',
    status: 200,
    message: 'ok',
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo2.md',
    status: 200,
    message: 'ok',
  },
  {
    href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arra',
    text: 'Arreglos',
    file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo2.md',
    status: 200,
    message: 'ok',
  },
  {
    href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arra',
    text: 'Arreglos',
    file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo2.md',
    status: 200,
    message: 'ok',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdn',
    text: 'Markdown',
    file: 'C:/Users/admin/Desktop/DEV001-md-links/prueba/ejemplo2.md',
    status: 404,
    message: 'fail',
  },
];

// Test de ruta existente.
describe('mdLinks', () => {
  it('deberia ser una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it("Deberia devolver una promesa", () => {
    return mdLinks()
      .then(() => {
        expect(mdLinks).toBe(typeof Promise);
      })
      .catch((error) => { error });
  });
  it('Deberia rechazar la promesa cuando el path no existe', () => {
    mdLinks(pathFalse).catch((error) => {
      expect(error).toBe('La ruta no existe');
    });
  });
  it(' Deberia devolver un array de objetos con links y texto', () => {
    expect(mdLinks('prueba/test.md')).resolves.toEqual([{
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'C:\\Users\\admin\\Desktop\\DEV001-md-links\\prueba\\test.md',
      status: 200,
      message: 'ok',
    }]);
  });
  // it('Deberia devolver mensaje de error si no es MD', () => {
  //   expect(fileMd('.txt')).toBe('El archivo no es MD');
  // });
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
  // it('Deberia devolver la misma ruta que ya es absoluta', () => {
  //   expect(absolute(absolutePath)).toBe(absolutePath);
  // });
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
  it('Deberia devolver un array de objetos con links', () => {
    expect(getLinks('[wikipedia](https://es.wikipedia.org)', 'wiki/Markdown')).toEqual([{
      href: 'https://es.wikipedia.org',
      text: 'wikipedia',
      file: 'wiki/Markdown',
    }]);
  });
});
// Test de READ
describe('leerArchivo', () => {
  it('Deberia ser una función', () => {
    expect(typeof leerArchivo).toBe('function');
  });
  it('Deberia regresar una cadena de texto', () => {
    leerArchivo('').then((getLinks) => {
    })
      .catch((error) => 'error');
  });
  // it("Deberia devolver una promesa", () => {
  //   expect(leerArchivo([])).toBe([Boolean]);
  // })
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

// test de Total de Links


describe('totalLinks', () => {
  it('Deberia ser una función', () => {
    expect(typeof totalLinks).toBe('function');
  });
  it('Recibe un array con Links y devuelve el número total de Links', () => {
    expect(totalLinks(arrLinks)).toEqual(6);
  });
});

// Test de Unicos links
describe('unique', () => {
  it('Deberia ser una función', () => {
    expect(typeof unique).toBe('function');
  });
  it('Recibe un array con Links y devuelve el número total de Links unicos', () => {
    expect(unique(arrLinks)).toEqual(5);
  });
});
// Test de Broken links 
describe('brokenStats', () => {
  it('Deberia ser una función', () => {
    expect(typeof brokenStats).toBe('function');
  });
  it('Recibe un array con Links y devuelve el número total de Links unicos', () => {
    expect(brokenStats(arrLinks)).toEqual(1);
  });
});