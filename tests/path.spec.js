

import { readFile } from '../lib/path.js';

const expect = global.expect;

describe('readFile', () => {
    it('Deberia leer una ruta', () => {
        return readFile('C://Users/macbookair13/Desktop/restaurant.01.db')
        .then((file) => {
            expect(file).toBe('C://Users/macbookair13/Desktop/restaurant.01.db')
        });
    });
});