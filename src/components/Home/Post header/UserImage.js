import React from 'react';
import image from '../../../assets/1.png';
import '../../../style/post.css';

export const UserImage = () => {

    return(
        <div className='user-image-container'>
                <img src={image} alt='Error' className='user-image' />
            </div>
    )
}