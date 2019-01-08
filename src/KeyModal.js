import React from 'react';
import './CSS/main.scss';

const KeyModal = (props) => {
    return (
     <div className='key-modal'>
      <div className='button-container'>
        <button onClick={props.toggleModal}>x</button>
         </div>
         <h2 className='modal-title'><i class="fas fa-key"></i>Key:</h2>
            <ul className='modal-list fa-ul'>
                <li><i class="fa-li fas fa-arrow-right"></i><span className='skyblue'>[file]</span> = file name</li>
                <li><i class="fa-li fas fa-arrow-right"></i><span className='skyblue'>[directory]</span> = directory name</li>
                <li><i class="fa-li fas fa-arrow-right"></i><span className='skyblue'>[file extension]</span> = file extension type (ex. .html, .css, .txt)</li>
            </ul>
     </div>
    );
  }

export default KeyModal;