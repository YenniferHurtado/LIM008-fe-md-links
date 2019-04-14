import { commandsConsole } from '../src/cli'

const path = '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md';
const firstOption = '--validate';
const secondOption = '--stats';

const ouput = [{
    Total:3,
    Unique:3, 
    Broken:1
}];

const ouputOne = 
[{ 
    File: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
    Text: 'https://urlfailfail.gg/',
    href: 'https://urlfailfail.gg/',
    Status: 'FAIL', 
    StatusMessage: 'URL no válido'
},
{
    File: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
    Text: 'https://www.linkedin.com/',
    href: 'https://www.linkedin.com/',
    Status: 'OK',
    StatusMessage: 200
},
{
    File: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
    Text: 'http://talento.laboratoria.la/',
    href: 'http://talento.laboratoria.la/',
    Status: 'OK',
    StatusMessage: 200
}];

const ouputThree = [{
    Total:3,
    Unique:3
}];

const outputFour = [{

File: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
href: 'https://urlfailfail.gg/',
Text: 'https://urlfailfail.gg/',
File: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
href: 'https://www.linkedin.com/',
Text: 'https://www.linkedin.com/',
File: '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md',
href: 'http://talento.laboratoria.la/',
Text: 'http://talento.laboratoria.la/'

}]


describe('function commandsConsole', () => {
    it('deberia ser una function', () => {
        return expect(typeof commandsConsole).toBe('function');
    });
    it('deberia darme las estadisticas y validate: total, unique y broken', (done) => {
        return commandsConsole(path)
        .then((res) => {
            expect(res).toEqual(ouput);
            done();
        }).catch(() => done());
    });
    it('deberia darme solo el validate: file, href, text, status, statusMessage', (done) => {
        return commandsConsole(path, firstOption, secondOption)
        .then((res) => {
            expect(res).toEqual(ouputOne)
            done();
        }).catch(() => done());
    });
    it('deberia darme solo las estádisticas de la ruta: file, href,text', (done) => {
        return commandsConsole(path, secondOption)
        .then((res) => {
            expect(res).toEqual(ouputThree)
            done();
        }).catch(() => done())
    });
    it('deberia darme solo file, href y text', (done) => {
        return commandsConsole(path)
        .then((res) => {
            expect(res).toEqual(outputFour)
            done();
        }).catch(() => done())
    });
});
