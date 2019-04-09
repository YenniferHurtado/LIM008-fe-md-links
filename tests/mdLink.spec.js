
import { mdLinks } from '../src/mdLinks'
import { routeToAbsolute } from '../src/controller/path'

const output = 
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

describe('función mdLinks', () => {
    it('deberia ser una función', () => {
        return expect(typeof mdLinks).toBe('function')
    });
    it('debería retornar una ruta absoluta', () => {
        expect()
      });
});