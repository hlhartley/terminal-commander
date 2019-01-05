import React, { Component } from 'react';
import './CSS/main.scss';
import GameContainer from './GameContainer';
import TerminalCard from './TerminalCard';

export default class App extends Component {

  render() {
    return (
      <div className='app-container'>
        <button className='reset-button'>RESET GAME</button>
        <GameContainer />
        <TerminalCard />
      </div>
    );
  }
}
