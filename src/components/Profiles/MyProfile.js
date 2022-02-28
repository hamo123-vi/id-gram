import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { showNav } from '../../assets/js/showNav';
import '../../style/profiles.css'
import { SmallPostContainer } from '../Explore screen/SmallPostContainer';
import { Links } from '../Home/Secondary component/Links';
import { ProfileHeader } from './ProfileHeader';
import { ProfileMenu } from './ProfileMenu';

export const MyProfile = props => {

    const user = useSelector(state => state.me)

    useEffect(() => {
        showNav()
    },[])


    return(
        <div className='profile'>
            <ProfileHeader path={props.path} src={user.image} icon={props.icon}  buttonClass={props.buttonClass} buttonValue={props.buttonValue} username={user.username} fullname={user.fullname}/>
            <ProfileMenu />
            <SmallPostContainer />
            <Links id='profile-type'/>
        </div>
    )
}