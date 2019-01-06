import React from 'react';
import './CSS/main.scss';

const AllCommandsModal = (props) => {
    let allCommands = props.terminalCommands;
    return (
     <div className='commands-modal'>
         {/* <p>Key:</p>
            <ul>
                <li>[file] = file name</li>
                <li>[directory] = directory name</li>
                <li>[file extension] = file extension type (ex. .html, .css, .txt)</li>
            </ul> */}
         <p>All Commands:</p>
         <ol>
         {
            allCommands.map((command) => {
            return <li>{command.description} = {command.command}</li>
         })
        }
         </ol>
     </div>
    );
  }

export default AllCommandsModal;