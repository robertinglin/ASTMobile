import * as React from "react";
import NodeSwitch from './NodeSwitch';
import { leftCurlyBrace, rightCurlyBrace } from "../../utils/curlyBraces";
import { ProgramNode } from "../../types/ast";


type ProgramProps = {
    node: ProgramNode;
}


const Program = (props: ProgramProps) => {

    return (
        <div>
            Program  {leftCurlyBrace()}
            <div style={{ marginLeft: '15px'}}>
            {props.node.body.map((node) => <NodeSwitch node={node} />)}
            </div>
            {rightCurlyBrace()}
        </div>
    );
}

export default Program;