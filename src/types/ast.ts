/**
 * STANDARD 
 */
export interface Position {
    line: number; // >= 1
    column: number; // >= 0
}

export interface SourceLocation {
    source: string | null;
    start: Position;
    end: Position;
}

export type AstNode = {
    type: String,
    loc: SourceLocation | null;
}

export interface Property extends AstNode {
    type: "Property";
    key: Literal | Identifier;
    value: Expression;
    kind: "init" | "get" | "set";
}

export interface Identifier extends Expression, Pattern {
    type: "Identifier";
    name: string;
}

/**
 * PROGRAMS
 */

export interface ProgramNode extends AstNode {
    body: Array<AstNode>
}

/**
 * EXPRESSIONS
 */
export interface Expression extends AstNode {

}

export interface Literal extends Expression {
    type: "Literal";
    value: string | boolean | null | number | RegExp;
}

export interface ObjectExpression extends Expression {
    type: "ObjectExpression";
    properties: Array<Property>;
}


/**
 * INTERFACES
 */
export interface Statement extends AstNode {

}

export interface ReturnStatement extends Statement {
    type: "ReturnStatement";
    argument: Expression | null;
}


/**
 * PATTERNS
 */
export interface Pattern extends AstNode {

}