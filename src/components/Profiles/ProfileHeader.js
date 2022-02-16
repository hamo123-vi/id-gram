import React from 'react';
import '../../style/profiles.css'
import { ProfilePictureContainer } from '../Home/Secondary component/Switch account/ProfilePictureContainer';

export const ProfileHeader = () => {

    return(
        <div className='profile-header'>
            <ProfilePictureContainer />
        </div>
    )
}