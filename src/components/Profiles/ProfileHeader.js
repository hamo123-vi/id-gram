import React from 'react';
import '../../style/profiles.css'
import { ProfilePictureContainer } from '../Profiles/ProfilePictureContainer'
import { ProfileInfoContainer } from './ProfileInfoContainer';

export const ProfileHeader = () => {

    return(
        <div className='profile-header'>
            <ProfilePictureContainer />
            <ProfileInfoContainer />
        </div>
    )
}