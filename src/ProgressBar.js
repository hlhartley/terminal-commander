import React, { Component } from 'react';
import './CSS/main.scss';

export default class ProgressBar extends Component {

  render() {
    return (
      <div className='progress-container'>
          <img src='/images/armytank.png' className='tank-img'></img>
          <img src='/images/star.png' className='star-img pulse'></img>
      </div>
    );
  }
}