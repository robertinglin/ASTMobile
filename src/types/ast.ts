
/**
 * STANDARD 
 */
export interface Position {
    line: number; // >= 1
    column: number; // >= 0
}

export interface SourceLocation {
    source: string | null;
    start: number;
    end: number;
}

export interface AstNode extends SourceLocation {
    type: String
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

export interface SwitchCase extends AstNode {
    type: "SwitchCase";
    test: Expression | null;
    consequent: [ Statement ];
}

export interface CatchClause extends AstNode {
    type: "CatchClause";
    param: Pattern;
    body: BlockStatement;
}

export interface VariableDeclarator extends AstNode {
    type: "VariableDeclarator";
    id: Pattern;
    init: Expression | null;
}

export enum UnaryOperator {
    "-",
    "+",
    "!","~",
    "typeof",
    "void",
    "delete"
};

export enum UpdateOperator {
    "++",
    "--"
}

export enum BinaryOperator {
    "==" , "!=" , "===" , "!=="
         , "<" , "<=" , ">" , ">="
         , "<<" , ">>" , ">>>"
         , "+" , "-" , "*" , "/" , "%"
         , "," , "^" , "&" , "in"
         , "instanceof"
};

export enum AssignmentOperator {
    "=" , "+=" , "-=" , "*=" , "/=" , "%="
        , "<<=" , ">>=" , ">>>="
        , ",=" , "^=" , "&="
}

export enum LogicalOperator {
    "||",
    "&&"
}


/**
 * PROGRAMS
 */

export interface ProgramNode extends AstNode {
    type: "Program"
    body: Array<Directive | Statement >
}


/**
 * EXPRESSIONS
 */
export interface Expression extends AstNode {}

export interface Literal extends Expression {
    type: "Literal";
    value: string | boolean | null | number | RegExp;
}


export interface RegExpLiteral extends Literal {
    regex: {
      pattern: string;
      flags: string;
    };
}

export interface ObjectExpression extends Expression {
    type: "ObjectExpression";
    properties: Array<Property>;
}

export interface ThisExpression extends Expression {
    type: "ThisExpression";
}

export interface ArrayExpression extends Expression {
    type: "ArrayExpression";
    elements: Array<Expression | null>;
}

export interface FunctionExpression extends Function, Expression {
    type: "FunctionExpression";
}

export interface UnaryExpression extends Expression {
    type: "UnaryExpression";
    operator: UnaryOperator;
    prefix: boolean;
    argument: Expression;
}

export interface UpdateExpression extends Expression {
    type: "UpdateExpression";
    operator: UpdateOperator;
    argument: Expression;
    prefix: boolean;
}

export interface BinaryExpression extends Expression {
    type: "BinaryExpression";
    operator: BinaryOperator;
    left: Expression;
    right: Expression;
}

export interface AssignmentExpression extends Expression {
    type: "AssignmentExpression";
    operator: AssignmentOperator;
    left: Pattern | Expression;
    right: Expression;
}

export interface LogicalExpression extends Expression {
    type: "LogicalExpression";
    operator: LogicalOperator;
    left: Expression;
    right: Expression;
}

export interface MemberExpression extends Expression, Pattern {
    type: "MemberExpression";
    object: Expression;
    property: Expression;
    computed: boolean;
}

export interface ConditionalExpression extends Expression {
    type: "ConditionalExpression";
    test: Expression;
    alternate: Expression;
    consequent: Expression;
}

export interface CallExpression extends Expression {
    type: "CallExpression";
    callee: Expression;
    arguments: Array<Expression>;
}

export interface NewExpression extends Expression {
    type: "NewExpression";
    callee: Expression;
    arguments: Array<Expression>;
}

export interface SequenceExpression extends Expression {
    type: "SequenceExpression";
    expressions: [ Expression ];
}

/**
 * STATEMENTS
 */
export interface Statement extends AstNode {}

export interface Declaration extends Statement {};

interface VariableDeclaration extends Declaration {
    type: "VariableDeclaration";
    declarations: [ VariableDeclarator ];
    kind: "var";
}

export interface ReturnStatement extends Statement {
    type: "ReturnStatement";
    argument: Expression | null;
}

export interface BlockStatement extends Statement {
    type: "BlockStatement";
    body: Array<Statement>;
}

export interface FunctionBody extends BlockStatement {
    body: Array<Directive | Statement>;
}

export interface EmptyStatement extends Statement {
    type: "EmptyStatement";
}

export interface ExpressionStatement extends Statement {
    type: "ExpressionStatement";
    expression: Expression;
}

export interface Directive extends ExpressionStatement {
    directive: string;
}

export interface DebuggerStatement extends Statement {
    type: "DebuggerStatement";
}

export interface WithStatement extends Statement {
    type: "WithStatement";
    object: Expression;
    body: Statement;
}

export interface LabeledStatement extends Statement {
    type: "LabeledStatement";
    label: Identifier;
    body: Statement;
}

export interface BreakStatement extends Statement {
    type: "BreakStatement";
    label: Identifier | null;
}

export interface ContinueStatement extends Statement {
    type: "ContinueStatement";
    label: Identifier | null;
}

export interface IfStatement extends Statement {
    type: "IfStatement";
    test: Expression;
    consequent: Statement;
    alternate: Statement | null;
}

export interface SwitchStatement extends Statement {
    type: "SwitchStatement";
    discriminant: Expression;
    cases: Array<SwitchCase>;
}

export interface ThrowStatement extends Statement {
    type: "ThrowStatement";
    argument: Expression;
}

export interface TryStatement extends Statement {
    type: "TryStatement";
    block: BlockStatement;
    handler: CatchClause | null;
    finalizer: BlockStatement | null;
}

export interface WhileStatement extends Statement {
    type: "WhileStatement";
    test: Expression;
    body: Statement;
}

export interface DoWhileStatement extends Statement {
    type: "DoWhileStatement";
    body: Statement;
    test: Expression;
}

export interface ForStatement extends Statement {
    type: "ForStatement";
    init: VariableDeclaration | Expression | null;
    test: Expression | null;
    update: Expression | null;
    body: Statement;
}

/**
 * FUNCTIONS
 */
export interface Function extends AstNode {
    id: Identifier | null;
    params: [Pattern];
    body: FunctionBody
}

export interface FunctionDeclaration extends Function, Declaration {
    type: "FunctionDeclaration";
    id: Identifier;
}

/**
 * PATTERNS
 */
export interface Pattern extends AstNode {}
