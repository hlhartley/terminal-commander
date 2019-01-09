import React from 'react';
import './CSS/main.scss';
import ProgressBar from './ProgressBar';

const GameContainer = (props) => {
    return (
        <div className='main-screen'>
            <h1>TERMINAL COMMANDER</h1>
            <div className="cloud x1"></div>
            <div className="cloud x2"></div>
            <div className="cloud x3"></div>
            <div className="cloud x4"></div>
            <div className="cloud x5"></div>
            <ProgressBar score = {props.score}/>
        </div>
    )
}
export default GameContainer;