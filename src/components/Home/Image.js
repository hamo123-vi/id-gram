import React from 'react';
import '../../style/post.css';
import image from '../../assets/1.png'

export const Image = () => {

    return(
        <div className='post-image-container'>
            <img src={image} alt='Error' className='post-image' />
        </div>
    )
}