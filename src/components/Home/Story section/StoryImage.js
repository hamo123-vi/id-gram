import React from 'react';
import '../../../style/home.css'

export const StoryImage = props => {

    return(
        <img src={`http://localhost:5000/profilepicture/${props.src}`} className={props.imgClass} alt='Error' />
    )
}