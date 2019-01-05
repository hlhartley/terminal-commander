import React, { Component } from 'react';
import './CSS/main.scss';

export default class TerminalCard extends Component {

  render() {
    return (
      <div className='terminal-card'>
        <p className='instructions-text'>Mission: type in the correct commands to get your tank to the target star</p>
        <p>Enter command to "<span>Reset terminal</span>"</p>
        <input placeholder='Input command'></input>
      </div>
    );
  }
}