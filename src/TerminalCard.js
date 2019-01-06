import React, { Component } from 'react';
import './CSS/main.scss';

export default class TerminalCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      score: 0,
      command: 'hi',
    }
  }
  
  render() {
    return (
        <div className='terminal-card'>
          <p className='mission-text'>Mission: type in the correct commands to get your tank to the target star</p>
          <p>Score: <span className='score'>{this.state.score} / 30</span> complete</p>
          <p>Enter command to "<span className='command-instructions'>{this.state.command}</span>"</p>
          <input placeholder='Input command'></input>
        </div>
      );
    }
  }
