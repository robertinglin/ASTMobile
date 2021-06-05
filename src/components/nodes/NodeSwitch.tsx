import * as React from "react";
import { hot } from "react-hot-loader";
import { leftCurlyBrace, rightCurlyBrace }  from "../../utils/curlyBraces";


export default class NodeSwitch extends React.Component<Record<string, unknown>, undefined> {

    public render() {
        
        
        return <div>Unknown</div>


        // switch (this.props.node.type) {
        //     case 'function':
        //         // return <Function />
        //         return <>Unknown</>
        // }
    }
    
}
