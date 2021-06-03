
export type AstNode = {
    type: String
}

export interface ProgramNode extends AstNode {
    body: Array<AstNode>
}