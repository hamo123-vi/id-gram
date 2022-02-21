import React from 'react';
import '../../../style/navigation.css';
import icon from '../../../assets/NewPosts.png'

export const Upload = () => {

    const openModal = () => {
        document.getElementById('modal').style.display = 'flex';
    }

    return(
        <div className='menu-icon-container'>
            <img src={icon} alt="Error" className='menu-item' onClick={openModal}/>
        </div>
    )
}