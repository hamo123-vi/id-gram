import React from 'react';
import '../../../style/navigation.css';
import icon from '../../../assets/ActivityFeed.png'

export const Heart = () => {

    return(
        <div className='menu-icon-container'>
            <img src={icon} alt="Error" className='menu-item'/>
        </div>
    )
}