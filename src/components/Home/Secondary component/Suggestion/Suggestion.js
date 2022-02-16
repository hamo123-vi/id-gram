import React from 'react';
import '../../../../style/home-secondary.css';
import { ProfilePictureContainer } from '../Switch account/ProfilePictureContainer';
import { Names } from '../Switch account/Names';
import { Switch } from '../Switch account/Switch';

export const Suggestion = () => {

    return(
        <div className='suggestion-container'>
            <ProfilePictureContainer imgClass='suggestion-image'/>
            <Names value='followed by ...' fullnameClass='suggestion-fullname' usernameClass='suggestion-username' />
            <Switch value='Follow' className='secondary-button' />
        </div>
    )
}