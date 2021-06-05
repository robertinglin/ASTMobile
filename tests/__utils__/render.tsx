import * as ReactDOM from 'react-dom';

import React, { ReactNode, Component } from "react"
import * as TestUtils from 'react-dom/test-utils';

class Wrapper extends React.Component {
    render() {
        return this.props.children
    }
}

export default (children: ReactNode): Component => {
    const node = TestUtils.renderIntoDocument<Element>(
        <Wrapper>{children}</Wrapper>
    );

    if (node instanceof Component) {
        return node;
    }
    throw new Error('Failed to render');

}