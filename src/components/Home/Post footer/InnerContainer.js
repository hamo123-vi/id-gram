import React from 'react';
import '../../../style/post.css';

export const InnerContainer = props => {

    return(
        <div className='inner-container'>
            <img className='like-like-icon' src={props.src} alt="Error" />
        </div>
    )
}