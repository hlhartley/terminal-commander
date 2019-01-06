import React from 'react';
import './CSS/main.scss';

const KeyModal = (props) => {
    return (
     <div className='key-modal'>
         <p>Key:</p>
            <ul>
                <li>[file] = file name</li>
                <li>[directory] = directory name</li>
                <li>[file extension] = file extension type (ex. .html, .css, .txt)</li>
            </ul>
     </div>
    );
  }

export default KeyModal;