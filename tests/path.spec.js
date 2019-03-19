

import { validRouteAbsolute, routeToAbsolute } from '../src/path.js';

const pathRelative = 'LIM008--md-links/tests';
const pathAbsolute = '/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD/READMEdatalover.md'; 

const convertAbsolute = '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/LIM008--md-links/tests';

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