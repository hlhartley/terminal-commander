import React from 'react';
import './CSS/main.scss';
import ProgressBar from './ProgressBar';

const GameContainer = (props) => {
    return (
        <div className='header'>
           <p className='background-text'>Background text</p>
           <ProgressBar />
        </div>
        )
}
export default GameContainer;