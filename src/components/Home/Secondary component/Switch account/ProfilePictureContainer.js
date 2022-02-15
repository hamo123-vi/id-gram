import React from 'react';
import '../../../../style/home-secondary.css';
import '../../../../style/home.css';
import image from '../../../../assets/1.png';
import { StoryImage } from '../../Story section/StoryImage';

export const ProfilePictureContainer = props => {

    return(
        <div className='profile-picture-container'>
            <StoryImage image={image} imgClass={props.imgClass}/>
        </div>
    )
}