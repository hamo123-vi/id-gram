import React from 'react';
import logo from '../../assets/Logo.png'
import '../../style/navigation.css';

export const Logo = () => {

    return(
    <div className='logo-box'>
        <img src={logo} alt="Error" className='logo' />
    </div>
    )
}