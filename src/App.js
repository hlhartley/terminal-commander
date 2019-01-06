import React, { Component } from 'react';
import './CSS/main.scss';
import GameContainer from './GameContainer';
import TerminalCard from './TerminalCard';
import AllCommandsModal from './AllCommandsModal';
import KeyModal from './KeyModal';

export default class App extends Component {
  constructor() {
    super();

  this.state = {
    hhTerminalCommands: [],
    score: 0,
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

  updateScore() {
    this.setState({score: this.state.score + 1})
  }

  resetGame = (e) => {
    e.preventDefault()
    this.setState({score: 0})
  }

  render() {
    return (
      <div className='app-container'>
        <button className='reset-button' onClick={this.resetGame}>RESET GAME</button>
        <button className='keys-button' onClick={this.resetGame}>ALL KEYS</button>
        <button className='allcommands-button' onClick={this.resetGame}>ALL COMMANDS</button>
        <AllCommandsModal terminalCommands = {this.state.hhTerminalCommands}/>
        <KeyModal />
        <GameContainer clickReset = {this.state.clickReset}/>
        <TerminalCard 
          terminalCommands = {this.state.hhTerminalCommands}
          score = {this.state.score}
          updateScore = {this.updateScore.bind(this)}
        />
      </div>
    );
  }
}
