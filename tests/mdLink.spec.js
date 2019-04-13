
import { mdLinks } from '../src/mdLinks'

const output = 
[ { href: 'https://urlfailfail.gg/',
    text: 'https://urlfailfail.gg/',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
    status: 'FAIL',
    statusText: 'URL no válido' 
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

const outputTwo = 
[{ 
href: 'https://urlfailfail.gg/',
text: 'https://urlfailfail.gg/',
file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
},
{   
href: 'https://www.linkedin.com/',
text: 'https://www.linkedin.com/',
file:  '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
},
{   
href: 'http://talento.laboratoria.la/',
text: 'http://talento.laboratoria.la/',
file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
}]

describe('función mdLinks', () => {
    it('deberia ser una función', () => {
        return expect(typeof mdLinks).toBe('function')
    });
    it('debería retornar un array de objetos con los href, text, file, status y statusText', (done) => {
        return mdLinks('/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md', { validate: true })
        .then((res) => {
            expect(res).toEqual(output)
            done();
        }).catch(() => done());
      });
    it('deberia retornar un array de objetos con los href, text y file', (done) => {
        return mdLinks('/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md', { validate : false})
        .then((res) => {
            expect(res).toEqual(outputTwo)
            done();
        }).catch(() => done());
    });
});