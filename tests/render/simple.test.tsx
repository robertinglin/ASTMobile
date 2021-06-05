import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import Program from '../../src/components/nodes/Program';
import { ProgramNode } from '../../src/types/ast';
import { parse } from '../../src/utils/parser';
import Render from '../utils/render';

describe('simple program renders', () => {
    let simpleProgram = `console.log(1 + 1)`;
    const script: ProgramNode = parse(simpleProgram)
    const programElement: Component = Render(<Program node={script} />)

    const testNode = ReactDOM.findDOMNode(programElement);
    expect(testNode.textContent).toEqual(`Program {console.log(1 + 1)}`);
});
