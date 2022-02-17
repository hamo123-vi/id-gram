import React from 'react';
import '../../style/profiles.css'
import '../../style/home.css'
import image from '../../assets/1.png'
import { StoryImage } from '../Home/Story section/StoryImage';

export const ProfilePictureContainer = () => {

    return(
        <div className='profile-picture-container'>
            <StoryImage image={image} imgClass='profile-picture'/>
        </div>
    )
}