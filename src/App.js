import React, { Component } from 'react';
import './CSS/main.scss';
import GameContainer from './GameContainer';
import TerminalCard from './TerminalCard';

export default class App extends Component {
  constructor() {
    super();

  this.state = {
    hhTerminalCommands: [],
  }
}

  componentDidMount() {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/hhTerminalCommands")
      .then(results => results.json())
      .then((result) => {
        this.setState({
          hhTerminalCommands: result.hhTerminalCommands
        })
      })
      .catch(err => {
        this.setState({error: err})
      })
  }

  render() {
    return (
      <div className='app-container'>
        <button className='reset-button'>RESET GAME</button>
        <GameContainer />
        <TerminalCard terminalCommands = {this.state.hhTerminalCommands}/>
      </div>
    );
  }
}
