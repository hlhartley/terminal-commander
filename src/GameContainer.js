import React from 'react';
import './CSS/main.scss';
import ProgressBar from './ProgressBar';

const GameContainer = (props) => {
    return (
        <div className='main-screen'>
           <h1>TERMINAL COMMANDER</h1>
           <ProgressBar />
        </div>
        )
}
export default GameContainer;