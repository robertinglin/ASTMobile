import * as astring from 'astring';
import * as acorn from 'acorn';

describe('astring', () => {
    it('generates code from an acorn ast', () => {
        let simpleTest : string = 'console.log(1 + 1);';
        let ast : acorn.Node = acorn.parse(simpleTest, null);
        let output : string = astring.generate(ast); 
        // astring adds a new line
        expect(output.trim()).toEqual(simpleTest);
    })
});