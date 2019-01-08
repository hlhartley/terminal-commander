import React, { Component } from 'react';
import './CSS/main.scss';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const transformStyles = {
      transform: `translate(${this.props.score*3.1}vw)`,
    }

    return (
      <div className='progress-container'>
          <div className='tank-container'><img src='/images/armytank.png' className='tank-img' alt='tank' style={transformStyles}></img></div>
          <img src='/images/star.png' className='star-img pulse' alt='yellow star'></img>
      </div>
    );
  }
}