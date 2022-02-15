import React from 'react';
import '../../../../style/home.css';

export const Switch = props => {

    return(
        <div className='switch-button-container'>
            <button className={props.className} onClick={() => alert("Switched!")}>Switch</button>
        </div>
    )
}