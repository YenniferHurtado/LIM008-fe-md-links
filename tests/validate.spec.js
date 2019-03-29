import { validateLinks, extractLinks, readDirectory } from '../src/validate.js';

const inputValidate = [{ 
    href: 'https://www.google.com',
    text: 'https://www.google.com',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md' },
  { href: 'https://www.linkedin.com/',
    text: 'https://www.linkedin.com/',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md' },
  { href: 'http://talento.laboratoria.la/',
    text: 'http://talento.laboratoria.la/',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md' }]

const outputValidate = 
[ { href: 'https://www.google.com',
    text: 'https://www.google.com',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
    status: 200,
    statusText: 'OK' 
},
{   href: 'https://www.linkedin.com/',
    text: 'https://www.linkedin.com/',
    file:  '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
    status: 200,
    statusText: 'OK' 
},
{   href: 'http://talento.laboratoria.la/',
    text: 'http://talento.laboratoria.la/',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
    status: 200,
    statusText: 'OK' }]


describe('funcion validateLinks', () => {
    it('Deberia ser una funcion', () => {
        return expect(typeof validateLinks).toBe('function');
    });
    it('deberia retornar un objeto con los links validados', (done) => {
        return validateLinks(inputValidate)
        .then((respuesta) => {
            expect(respuesta).toEqual(outputValidate);
            done();
        }).catch(() => done());
    });
  }); 