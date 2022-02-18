import React from 'react';
import '../../style/profiles.css'
import { ProfilePictureContainer } from '../Profiles/ProfilePictureContainer'
import { ProfileInfoContainer } from './ProfileInfoContainer';

export const ProfileHeader = props => {

    return(
        <div className='profile-header'>
            <ProfilePictureContainer />
            <ProfileInfoContainer icon={props.icon}  buttonClass={props.buttonClass} buttonValue={props.buttonValue} fullname={props.fullname}/>
        </div>
    )
}