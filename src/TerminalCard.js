import React, { Component } from 'react';
import './CSS/main.scss';

export default class TerminalCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      score: 0,
      inputValue: '',
    }
  }

  componentDidUpdate() {
    this.updateScore();
  }

  displayCommandDescription() {
    if(!this.props.terminalCommands.length) {
      return 'Reset terminal screen';
    } else {
      return this.props.terminalCommands[`${this.state.score}`].description;
    }
  }

  displayCommandInput() {
    if(!this.props.terminalCommands.length) {
      return 'reset';
    } else {
      return this.props.terminalCommands[`${this.state.score}`].command;
    }
  }

  enterCommand = (event) => {
    this.setState({inputValue: event.target.value})
    this.updateScore(event)
  }

  updateScore(event) {
    if(this.state.inputValue === this.displayCommandInput()) {
      this.clearInput()
      this.setState({score: this.state.score + 1})
    }
  }

  clearInput = () => {
    // document.getElementById("commandInput").reset();
    this.setState({
      inputValue: ''
    })
  }
  
  render() {
    return (
        <div className='terminal-card'>
          <p className='mission-text'>Mission: type in the correct commands to get your tank to the target star</p>
          <p>Score: <span className='score'>{this.state.score} / 30</span> complete</p>
          <p>Enter command to "<span className='command-instructions'>{this.displayCommandDescription()}</span>"</p>
          <input placeholder={this.displayCommandInput()} id='commandInput' className='command-input' onChange={this.enterCommand}></input>
        </div>
      );
    }
  }
