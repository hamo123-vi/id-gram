import React from 'react';
import '../../style/profiles.css'
import { SmallPostContainer } from '../Explore screen/SmallPostContainer';
import { Links } from '../Home/Secondary component/Links';
/* import { Content } from './Content'; */
import { ProfileHeader } from './ProfileHeader';
import { ProfileMenu } from './ProfileMenu';

export const UserProfile = props => {

    return(
        <div className='profile'>
            <ProfileHeader icon={props.icon}  buttonClass={props.buttonClass} buttonValue={props.buttonValue} fullname={props.fullname}/>
            <ProfileMenu />
            <SmallPostContainer />
            <Links id='profile-type'/>
        </div>
    )
}