import React from 'react';
import '../../style/profiles.css'
import content from '../../assets/Content.png'

export const Content = () => {

    return(
        <div className='profile'>
            <div className='profile-content'>
                <img src={content} alt='Error' />
            </div>
        </div>
    )
}