import React, { Component } from 'react';
import './CSS/main.scss';
import Header from './Header';
import TerminalCard from './TerminalCard';
import ProgressBar from './ProgressBar';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <TerminalCard />
        <ProgressBar />
      </div>
    );
  }
}
