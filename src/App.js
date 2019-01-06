import React, { Component } from 'react';
import './CSS/main.scss';
import GameContainer from './GameContainer';
import TerminalCard from './TerminalCard';

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
