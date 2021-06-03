import * as React from "react";
import { hot } from "react-hot-loader";

import ast from '../assets/json/testast.json';
import Program from './nodes/Program';

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Hello Ast Mobile!</h1>
        <p>This is going to be a mobile IDE one day!</p>
        <img src={reactLogo.default} height="480" />
        <Program node={ast} />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
