

import { validRouteAbsolute, routeToAbsolute, readDirectory } from '../src/path.js';

const pathRelative = 'LIM008--md-links/tests';
const pathAbsolute = '/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD/READMEdatalover.md'; 

const convertAbsolute = '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/LIM008--md-links/tests';

const outputReadDirectory = ["/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/READMEdatalover.md", "/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/READMEmdlinks.md", "/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/READMEredsocial.md"];

const inputReadDirectory = '/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD';

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

describe('funcion readDirectory', () => {
    it('deberia ser una funcion', () => {
        return expect(typeof readDirectory).toBe('function');
    });
    it('deberia retornar un array de archivos md', () => {
        expect(readDirectory(inputReadDirectory)).toEqual(outputReadDirectory);
    });
});