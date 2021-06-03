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
            {props.node.body.map((node) => <NodeSwitch node={node} />)}
            {rightCurlyBrace()}
        </div>
    );
}

export default Program;