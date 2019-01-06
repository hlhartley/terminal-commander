import React, { Component } from 'react';
import './CSS/main.scss';

export default class TerminalCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      score: 2,
      inputValue: '',
    }
  }

  displayFirstCommandDescription() {
    if(!this.props.terminalCommands.length) {
      return 'Reset terminal screen';
    } else {
      return this.props.terminalCommands[`${this.state.score}`].description;
    }
  }

  displayFirstCommandInput() {
    if(!this.props.terminalCommands.length) {
      return 'reset';
    } else {
      return this.props.terminalCommands[`${this.state.score}`].command;
    }
  }

  enterCommand = (event) => {
    this.setState({inputValue: event.target.value})
    }

  updateScore() {
    // if(this.state.inputValue === this.displayFirstCommandInput()) {
    //   this.setState({score: this.state.score++})
      this.setState({score: this.state.score++})
    }
  
  render() {
    return (
        <div className='terminal-card'>
          <p className='mission-text'>Mission: type in the correct commands to get your tank to the target star</p>
          <p>Score: <span className='score'>{this.state.score} / 30</span> complete</p>
          <p>Enter command to "<span className='command-instructions'>{this.displayFirstCommandDescription()}</span>"</p>
          <input placeholder={this.displayFirstCommandInput()} className='command-input' onChange={this.enterCommand} onChange={this.updateScore}></input>
        </div>
      );
    }
  }
