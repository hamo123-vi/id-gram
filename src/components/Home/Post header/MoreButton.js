import React from 'react';
import more from '../../../assets/More.png'
import '../../../style/post.css';

export const MoreButton = () => {

    return(
        <div className='more-button-container'>
            <img src={more} alt='Error' className='more-button' />
        </div>
    )
}