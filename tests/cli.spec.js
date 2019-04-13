import { commandsConsole } from '../src/cli'


describe('function commandsConsole', ()=> {
    it('deberia ser una function', () => {
        return expect(typeof commandsConsole).toBe('function');
    });
});
