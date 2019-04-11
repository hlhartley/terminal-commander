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
    showCommands: false,
    showKeys: false,
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

  resetGame = () => {
    this.setState({score: 0})
  }

  toggleAllCommandsModal() {
    this.setState({showCommands: !this.state.showCommands})
  }

  toggleAllKeysModal() {
    this.setState({showKeys: !this.state.showKeys})
  }

  renderModals() {
    if(this.state.showCommands) {
      return ( 
        <AllCommandsModal 
          terminalCommands = {this.state.hhTerminalCommands} 
          toggleModal = {this.toggleAllCommandsModal.bind(this)}
        />
      )
    }
    if(this.state.showKeys) {
      return <KeyModal toggleModal = {this.toggleAllKeysModal.bind(this)}/>
    }
  }

  render() {
    return (
      <div className='app-container'>
        <GameContainer 
          clickReset = {this.state.clickReset}
          score = {this.state.score}
        />
        <div className='buttons-container'>
          <button className='reset-button' onClick={this.resetGame}>RESET GAME</button>
          <button className='keys-button' onClick={this.toggleAllKeysModal.bind(this)}>KEY</button>
          <button className='allcommands-button' onClick={this.toggleAllCommandsModal.bind(this)}>ALL COMMANDS</button>
        </div>
        <TerminalCard 
          terminalCommands = {this.state.hhTerminalCommands}
          score = {this.state.score}
          updateScore = {this.updateScore.bind(this)}
        />
        {this.renderModals()}
      </div>
    );
  }
}