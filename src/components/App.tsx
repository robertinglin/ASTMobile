import * as React from "react";
import { hot } from "react-hot-loader";

import ast from '../assets/json/testast.json';
import Program from './nodes/Program';

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import { ProgramNode } from "../types/ast";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    let progNode = ast as  unknown as ProgramNode;
    return (
      <div className="app">
        <Program node={progNode} />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
