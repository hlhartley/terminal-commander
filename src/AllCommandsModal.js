import React from 'react';
import './CSS/main.scss';

const AllCommandsModal = (props) => {
    let allCommands = props.terminalCommands;
    return (
     <div className='commands-modal'>
     <div className='button-container'>
        <button onClick={props.toggleModal}>x</button>
         </div>
         <h2 className='modal-title'>All Commands:</h2>
         <ol className='modal-list'>
         {
            allCommands.map((command) => {
            return <li key={command.id}><span className='skyblue'>{command.description}</span> = {command.command}</li>
         })
        }
         </ol>
     </div>
    );
  }

export default AllCommandsModal;