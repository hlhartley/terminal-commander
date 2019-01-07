import React from 'react';
import './CSS/main.scss';

const KeyModal = (props) => {
    return (
     <div className='hide key-modal'>
      <div className='button-container'>
        <button>x</button>
         </div>
         <h2 className='modal-title'>Key:</h2>
            <ul className='modal-list'>
                <li><span className='skyblue'>[file]</span> = file name</li>
                <li><span className='skyblue'>[directory]</span> = directory name</li>
                <li><span className='skyblue'>[file extension]</span> = file extension type (ex. .html, .css, .txt)</li>
            </ul>
     </div>
    );
  }

export default KeyModal;