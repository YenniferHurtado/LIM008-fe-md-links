import { validateLinks } from '../src/controller/validate';

const inputValidate = [{ 
    href: 'https://urlfailfail.gg/',
    text: 'https://urlfailfail.gg/',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md' },
  { href: 'https://www.linkedin.com/',
    text: 'https://www.linkedin.com/',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md' },
  { href: 'http://talento.laboratoria.la/',
    text: 'http://talento.laboratoria.la/',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md' }]

const outputValidate = [{ 
  href: 'https://urlfailfail.gg/',
  text: 'https://urlfailfail.gg/',
  file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
  code: 'URL no válido',
  status: 'FAIL' },
{ href: 'https://www.linkedin.com/',
  text: 'https://www.linkedin.com/',
  file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
  code: 200,
  status: 'OK' },
{ href: 'http://talento.laboratoria.la/',
  text: 'http://talento.laboratoria.la/',
  file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
  code: 200,
  status: 'OK' }]

describe('funcion validateLinks', () => {
    it('Deberia ser una funcion', () => {
        return expect(typeof validateLinks).toBe('function');
    });
    it('deberia retornar un objeto con los links validados', (done) => {
        return validateLinks(inputValidate)
        .then((respuesta) => {
            expect(respuesta).toEqual(outputValidate);
            done();
        })
    });
  }); 