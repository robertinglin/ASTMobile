import { ProgramNode } from "../types/ast";
import * as acorn from 'acorn';


export const parseCodeStringToProgramNode = (input : string) : ProgramNode => {
    return (acorn.parse(input, {ecmaVersion: 5}) as unknown) as ProgramNode;
}