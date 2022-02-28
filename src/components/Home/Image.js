import React from 'react';
import '../../style/post.css';

export const Image = props => {

    return(
        <div>
            <img src={props.src} alt='Error' className='post-image' />
        </div>
    )
}