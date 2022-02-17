import React from 'react';
import '../../../style/home.css'

export const StoryImage = props => {

    return(
        <img src={props.image} className={props.imgClass} alt='Error' />
    )
}