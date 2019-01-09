import React from 'react';
import './CSS/main.scss';

const AllCommandsModal = (props) => {
   let allCommands = props.terminalCommands;
   return (
   <div className='commands-modal'>
      <div className='button-container'>
         <button onClick={props.toggleModal}>x</button>
      </div>
      <h2 className='modal-title'><i class="fas fa-hand-point-right"></i>All Commands:</h2>
      <ul className='modal-list fa-ul'>
      {
         allCommands.map((command) => {
            return (
               <li key={command.id}><i class="fa-li fas fa-angle-double-right"></i><span className='skyblue'>{command.description}</span> = {command.command}</li>
            )
         })
      }
      </ul>
   </div>
   );
}

export default AllCommandsModal;