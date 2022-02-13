import React from 'react';
import '../../../style/navigation.css';
import icon from '../../../assets/Messenger.png'

export const Inbox = () => {

    return(
        <div className='menu-icon-container'>
            <img onClick={() => alert("success")} src={icon} alt="Error" className='menu-icon'/>
        </div>
    )
}