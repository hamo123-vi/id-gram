import React from 'react';
import '../../../style/post.css';

export const LikeNumber = props => {

    return(
        <div className='like-number-container'>
            <h5 className='like-number'>{props.likes} likes</h5>
        </div>
    )
}