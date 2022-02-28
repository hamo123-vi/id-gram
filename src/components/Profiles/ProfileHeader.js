import React from 'react';
import '../../style/profiles.css'
import { ProfilePictureContainer } from '../Profiles/ProfilePictureContainer'
import { ProfileInfoContainer } from './ProfileInfoContainer';

export const ProfileHeader = props => {

    return(
        <div className='profile-header'>
            <ProfilePictureContainer src={props.src}/>
            <ProfileInfoContainer path={props.path} icon={props.icon}  buttonClass={props.buttonClass} buttonValue={props.buttonValue} username={props.username} fullname={props.fullname}/>
        </div>
    )
}