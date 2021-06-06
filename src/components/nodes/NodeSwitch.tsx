import * as React from "react";
import { hot } from "react-hot-loader";
import { AstNode, FunctionDeclaration, Identifier, ReturnStatement, BinaryExpression } from "../../types/ast";
import { leftCurlyBrace, rightCurlyBrace }  from "../../utils/curlyBraces";
import FunctionDeclarationRenderer from './functions/FunctionDeclaration';
type NodeSwitchProps = {
    node: AstNode;
}

const NodeSwitch = (props: NodeSwitchProps) => {
        
        
    
    if(props.node.type === 'FunctionDeclaration'){
        const functionNode : FunctionDeclaration = props.node as FunctionDeclaration;
        return <FunctionDeclarationRenderer node={functionNode} />;
    }
    if (props.node.type === 'Identifier') {
        const identifierNode : Identifier = props.node as Identifier;
        return <span>{identifierNode.name}</span>

    }
    if (props.node.type === 'ReturnStatement') {
        const returnStatementNode : ReturnStatement = props.node as ReturnStatement;
        return <div> return <NodeSwitch node={returnStatementNode.argument} /></div>
    }
    if (props.node.type === 'BinaryExpression') {
        const binaryExpressionNode : BinaryExpression = props.node as BinaryExpression;
        return <span> <NodeSwitch node={binaryExpressionNode.left} /> {binaryExpressionNode.operator.toString()} <NodeSwitch node={binaryExpressionNode.right} /> </span>
    }
    return <div>Unknown {props.node.type}</div>
        // switch (this.props.node.type) {
        //     case 'function':
        //         // return <Function />
        //         return <>Unknown</>
        // }
    
}

export default NodeSwitch;
