import React from 'react';
import '../../style/profiles.css'
import { ProfileHeader } from './ProfileHeader';

export const UserProfile = props => {

    return(
        <div className='profile'>
            <ProfileHeader icon={props.icon}  buttonClass={props.buttonClass} buttonValue={props.buttonValue} fullname={props.fullname}/>
        </div>
    )
}