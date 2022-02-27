import React, {useEffect} from 'react';
import { showNav } from '../../assets/js/showNav';
import '../../style/profiles.css'
import { SmallPostContainer } from '../Explore screen/SmallPostContainer';
import { Links } from '../Home/Secondary component/Links';
/* import { Content } from './Content'; */
import { ProfileHeader } from './ProfileHeader';
import { ProfileMenu } from './ProfileMenu';

export const UserProfile = props => {

    useEffect(() => {
        showNav()
    },[])

    return(
        <div className='profile'>
            <ProfileHeader path={props.path} src={props.image} icon={props.icon}  buttonClass={props.buttonClass} buttonValue={props.buttonValue} username={props.username} fullname={props.fullname}/>
            <ProfileMenu />
            <SmallPostContainer />
            <Links id='profile-type'/>
        </div>
    )
}