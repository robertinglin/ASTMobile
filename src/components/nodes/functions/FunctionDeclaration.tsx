import * as React from "react";
import { hot } from "react-hot-loader";
import { AstNode, FunctionDeclaration, Identifier, FunctionBody } from "../../../types/ast";
import { leftCurlyBrace, rightCurlyBrace }  from "../../../utils/curlyBraces";
import NodeSwitch from '../NodeSwitch';

type FunctionDeclarationProps = {
    node: FunctionDeclaration;
}

const FunctionDeclarationRenderer = (props: FunctionDeclarationProps) => {
        console.log("props.node in renderer", props.node);
        const functionBodyNode : FunctionBody = props.node.body as FunctionBody; 
        return <div>
            function <NodeSwitch node={props.node.id} /> ({props.node.params.map((node) => <NodeSwitch node={node} />)}) {leftCurlyBrace()} 
            <div style={{ marginLeft: '15px'}}>{functionBodyNode.body.map((node) => <NodeSwitch node={node} />)}
            </div>{rightCurlyBrace()}
        </div>;
}

export default FunctionDeclarationRenderer;
