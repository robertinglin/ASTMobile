import * as React from "react";
import { hot } from "react-hot-loader";
import PropTypes from 'prop-types'
import NodeSwitch from './NodeSwitch';
import { leftCurlyBrace, rightCurlyBrace }  from "../../utils/curlyBraces";


export default class Program extends React.Component<Record<string, unknown>, undefined> {
    propTypes = {
        node: PropTypes.shape({
            type: PropTypes.string.isRequired,
            body: PropTypes.object.isRequired
        })
    }

    public render() {
        return (
            <div>
                Program  {leftCurlyBrace()}
                {/* {this.props.node.body.map((node) => <NodeSwitch node={node} />)} */}
                {rightCurlyBrace()}
            </div>
        );
    }
}