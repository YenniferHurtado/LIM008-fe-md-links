

import { readFile } from '../lib/path.js';

const expect = global.expect;

describe('readFile', () => {
    it('Deberia ser una función', () => {
            expect(typeof readFile).toBe('function');
        });
    });