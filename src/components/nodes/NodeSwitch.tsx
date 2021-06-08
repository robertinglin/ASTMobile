import * as React from "react";
import { hot } from "react-hot-loader";
import { AstNode, FunctionDeclaration, Identifier, ReturnStatement, BinaryExpression } from "../../types/ast";
import { leftCurlyBrace, rightCurlyBrace }  from "../../utils/curlyBraces";
import FunctionDeclarationRenderer from './functions/FunctionDeclaration';
type NodeSwitchProps = {
    node: AstNode;
}

const NodeSwitch = (props: NodeSwitchProps) => {
        
    switch (props.node.type) {
        case 'FunctionDeclaration':
            const functionNode : FunctionDeclaration = props.node as FunctionDeclaration;
            return <FunctionDeclarationRenderer node = {functionNode} />

        case 'Identifier':
            const identifierNode : Identifier = props.node as Identifier;
            return <span>{identifierNode.name}</span>

        case 'ReturnStatement':
            const returnStatementNode : ReturnStatement = props.node as ReturnStatement;
            return <div> return <NodeSwitch node = {returnStatementNode.argument} /></div>

        case 'BinaryExpression':
            const binaryExpressionNode : BinaryExpression = props.node as BinaryExpression;
            return <span><NodeSwitch node = {binaryExpressionNode.left}/> {binaryExpressionNode.operator.toString()} <NodeSwitch node={binaryExpressionNode.right}/> </span>

        default: 
            return <div>Unknown {props.node.type}</div>
    }
    
}

export default NodeSwitch;
