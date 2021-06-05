import { ProgramNode } from "../../src/types/ast";
import { parse } from "../../src/utils/parser";

describe('parser', () => {
    test('parse', () => {
        const outputNode: ProgramNode = parse('console.log(\'test\')');
        expect(outputNode).toEqual({
            "body": [
                {
                    "end": 19,
                    "expression": {
                        "arguments": [
                            {
                                "end": 18,
                                "raw": "'test'",
                                "start": 12,
                                "type": "Literal",
                                "value": "test" 
                            }
                        ],
                        "callee": {
                            "computed": false,
                            "end": 11,
                            "object": {
                                "end": 7,
                                "name": "console",
                                "start": 0,
                                "type": "Identifier"
                            },
                            "property": {
                                "end": 11,
                                "name": "log",
                                "start": 8,
                                "type": "Identifier"
                            },
                            "start": 0,
                            "type": "MemberExpression"
                        },
                        "end": 19,
                        "start": 0,
                        "type": "CallExpression"
                    },
                    "start": 0,
                    "type": "ExpressionStatement"
                }],
                "end": 19,
                "sourceType": "script",
                "start": 0,
                "type": "Program"
            });
    });
})