

import { validRouteAbsolute, routeToAbsolute, readDirectoryOrFile } from '../src/controller/path';
import { extractLinks } from '../src/controller/links';


const pathRelative = 'LIM008--md-links/tests';
const pathAbsolute = '/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD/READMEdatalover.md'; 

const convertAbsolute = '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/LIM008--md-links/tests';

const outputReadDirectory = ["/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dir2/md.md", 
                            "/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md", 
                            "/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/mdl.md",
                            "/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/rs.md"];

const inputReadDirectory = '/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD';

const inputExtractLink = '/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md';

const outputExtractLink = [{ 
    href: 'https://urlfailfail.gg/',
    text: 'https://urlfailfail.gg/',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md' },
  { href: 'https://www.linkedin.com/',
    text: 'https://www.linkedin.com/',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md' },
  { href: 'http://talento.laboratoria.la/',
    text: 'http://talento.laboratoria.la/',
    file: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md' }]


describe('funcion validRoute', () => {
    it('Deberia ser una funcion', () => {
            return expect(typeof validRouteAbsolute).toBe('function');
            });
    it('deberia retornar false si la ruta es relativa', () => {
        expect(validRouteAbsolute(pathRelative)).toBe(false);
    });
    it('deberia retornar true si la ruta es absoluta', () => {
        expect(validRouteAbsolute(pathAbsolute)).toBe(true);
    });
});

describe('funcion pathToAbsolute', () => {
    it('Deberia ser una función', () => {
        return expect(typeof routeToAbsolute).toBe('function');
    });
    it('deberia convertir a una ruta absoluta', () => {
        expect(routeToAbsolute(pathRelative)).toBe(convertAbsolute);
    });
});

describe('funcion readDirectoryOrFile', () => {
    it('deberia ser una funcion', () => {
        return expect(typeof readDirectoryOrFile).toBe('function');
    });
    it('deberia retornar un array de archivos md', () => {
        expect(readDirectoryOrFile(inputReadDirectory)).toEqual(outputReadDirectory);
    });
});

describe('funcion extractLinks', () => {
    it('deberia ser una funcion', () => {
        return expect(typeof extractLinks).toBe('function');
    });
    it('deberia retornar los links de un archivo o una carpeta', () => {
        expect(extractLinks(readDirectoryOrFile(inputExtractLink))).toEqual(outputExtractLink);
    });
});

