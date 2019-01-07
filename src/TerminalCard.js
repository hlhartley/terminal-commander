import React, { Component } from 'react';
import './CSS/main.scss';

export default class TerminalCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inputValue: '',
    }
  }

  componentDidUpdate() {
    this.updateScore();
  }

  displayCommandDescription() {
    if(this.props.score === 30) {
      return 'You won'
    }
    if(!this.props.terminalCommands.length) {
      return 'Reset terminal screen';
    } else {
      return this.props.terminalCommands[`${this.props.score}`].description;
    }
  }

  displayCommandInput() {
    if(this.props.score === 30) {
      return 'You won'
    }
    if(!this.props.terminalCommands.length) {
      return 'reset';
    } else {
      return this.props.terminalCommands[`${this.props.score}`].command;
    }
  }

  enterCommand = (event) => {
    this.setState({inputValue: event.target.value})
    this.updateScore(event)
  }

  updateScore(event) {
    if(this.state.inputValue === this.displayCommandInput()) {
      this.clearInput()
      this.props.updateScore()
    }
  }

  clearInput = () => {
    document.getElementById("commandInput").value = '';
    this.setState({
      inputValue: ''
    })
  }
  
  render() {
    if(this.props.score === 30) {
      return (
        <div className='terminal-card'>
          <p className='congrats-message'><i class="fas fa-flag-usa"></i> CONGRATS YOU WON THE GAME!</p>
        </div>
      )
    } else {
      return (
          <div className='terminal-card'>
            <p className='mission-text'>Mission: type in the correct commands to get your tank to the target star</p>
            <p>Score: <span className='score'>{this.props.score} / 30</span> complete</p>
            <p>Enter command to "<span className='command-instructions'>{this.displayCommandDescription()}</span>"</p>
            <input placeholder={this.displayCommandInput()} id='commandInput' className='command-input' onChange={this.enterCommand}></input>
          </div>
        );
      }
    }
  }
