import React, { useState } from 'react';
import '../../style/profiles.css'

export const ProfileMenu = () => {

    const [activeFirst, setFirst]=useState(false)
    const [activeSecond, setSecond]=useState(false)

    const toggleFirst = () => {
        setFirst(!activeFirst)
        setSecond(false)
    }

    const toggleSecond = () => {
        setFirst(false)
        setSecond(!activeSecond)
    }

    
    return(
        <div className='profile-menu-container'>
            <div onClick={toggleFirst} className={activeFirst ? 'profile-menu-option active' : 'profile-menu-option'}>POSTS</div>
            <div onClick={toggleSecond} className={activeSecond ? 'profile-menu-option active' : 'profile-menu-option'}>RANDOM</div>
        </div>
    )
}