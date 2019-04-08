import { uniqueLinks, totalLinks, brokenLinks } from '../src/controller/stats'

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


describe('función uniqueLinks', () => {
    it('debería ser una función', () => {
        return expect(typeof uniqueLinks).toBe('function');
    });
    it('debería contar los links únicos del objeto', () => {
        expect(uniqueLinks(outputValidate)).toBe(3);
    });
});

describe('funcion totalLinks', () => {
    it('deberia ser una funcion', () => {
        return expect (typeof totalLinks).toBe('function');
    });
    it('deberia contar la totalidad de links', () => {
        expect(totalLinks(outputValidate)).toBe(3);
    });
});

describe('funcion brokenLinks', () => {
    it('deberia ser una funcion', () => {
        return expect(typeof brokenLinks).toBe('function');
    });
    it('deberia contar los links rotos del objeto', () => {
        expect(brokenLinks(outputValidate)).toBe(0);
    }); 
});
