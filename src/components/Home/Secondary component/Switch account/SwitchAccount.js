import React from 'react';
import '../../../../style/home-secondary.css';
import { ProfilePictureContainer } from './ProfilePictureContainer';
import { Names } from './Names'
import { Switch } from './Switch'

export const SwitchAccount = () => {

    return(
        <div className='switch-account-container'>
            <ProfilePictureContainer imgClass='story-image'/>
            <Names fullnameClass='full-name' usernameClass='user-name' />
            <Switch className='secondary-button' />
        </div>
    )
}