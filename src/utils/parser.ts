import { ProgramNode } from "../types/ast";
import * as acorn from 'acorn';


export const parse = (input : string) : ProgramNode => {
    return (acorn.parse(input, {ecmaVersion: 2020}) as unknown) as ProgramNode;
}