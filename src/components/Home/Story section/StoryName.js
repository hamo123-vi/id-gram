import React from 'react';
import '../../../style/home.css';

export  const StoryName = props => {

    return(
        <p className='story-name'>
            {props.username}</p>
    )
}