import React, { Component } from 'react';
import './CSS/main.scss';

export default class TerminalCard extends Component {

  render() {
    return (
      <div className='terminal-card'>
        <p className='mission-text'>Mission: type in the correct commands to get your tank to the target star</p>
        <p>Score: <span className='score'>0 / 30</span> complete</p>
        <p>Enter command to "<span className='command-instructions'>Reset terminal</span>"</p>
        <input placeholder='Input command'></input>
      </div>
    );
  }
}