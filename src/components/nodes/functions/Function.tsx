import * as React from "react";
import { hot } from "react-hot-loader";
import { AstNode, FunctionDeclaration, Identifier } from "../../../types/ast";
import { leftCurlyBrace, rightCurlyBrace }  from "../../../utils/curlyBraces";

type NodeSwitchProps = {
    node: AstNode;
}

const NodeSwitch = (props: FunctionDeclarationProps) => {
        
        
    
    if(props.node.type === 'FunctionDeclaration'){
        const functionNode : FunctionDeclaration = props.node as FunctionDeclaration;
        return <div> function <NodeSwitch node={functionNode.id} /> ({functionNode.params.map((node) => <NodeSwitch node={node} />)}) {leftCurlyBrace()} {functionNode.body.map((node) => <NodeSwitch node={node} />)} {rightCurlyBrace()}</div>
    }
    if (props.node.type === 'Identifier') {
        const identifierNode : Identifier = props.node as Identifier;
        return <span>{identifierNode.name}</span>

    }
    return <div>Unknown</div>
        // switch (this.props.node.type) {
        //     case 'function':
        //         // return <Function />
        //         return <>Unknown</>
        // }
    
}

export default NodeSwitch;
