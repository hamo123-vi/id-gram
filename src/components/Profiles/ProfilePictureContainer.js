import React from 'react';
import '../../style/profiles.css'
import '../../style/home.css'
import { StoryImage } from '../Home/Story section/StoryImage';

export const ProfilePictureContainer = props => {

    return(
        <div className='profile-picture-container'>
            <StoryImage src={props.src} imgClass='profile-picture'/>
        </div>
    )
}