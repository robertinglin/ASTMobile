import * as React from "react";
import { hot } from "react-hot-loader";

import ast from '../assets/json/testast.json';
import Program from './nodes/Program';

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import { ProgramNode } from "../types/ast";
import { getGist, Gist } from "../services/github";
import { parseCodeStringToProgramNode } from '../utils/parser';

class App extends React.Component<Record<string, unknown>, { programNode : ProgramNode | null, errorMessage: string }> {
  state = {
    programNode: null ,
    errorMessage: ''
  }

  constructor(props) {
    super(props);

    this.loadGist();
  }

  async loadGist() {
    try {
      const gist : Gist = await getGist('24753b4fce0c340531ea64fd4e9c8ef5');
      console.log(gist.content);
      const parsedGist : ProgramNode = parseCodeStringToProgramNode(gist.content);
      this.setState({
        programNode: parsedGist
      });
    } catch (rawError) {
      

    console.log(rawError);

      const error = rawError as Error;
      this.setState({
        errorMessage: error.message
      });
    }
  }

  public render() {
    if (this.state.errorMessage !== '') {
      return <div>
        <h1 style={{ color: 'red' }}>
          Oh no there's an Error
        </h1>
        <p>{this.state.errorMessage}</p>
      </div>
    }

    if (this.state.programNode == null) {
      return <div className="app">
        Loading
      </div>
    }
    return (
      <div className="app">
        <Program node={this.state.programNode} />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
