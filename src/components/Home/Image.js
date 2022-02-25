import React from 'react';
import '../../style/post.css';
import image from '../../assets/1.png'

export const Image = props => {

    return(
        <div id={props.id} className='post-image-container'>
            <img src={props.src} alt='Error' className='post-image' />
        </div>
    )
}