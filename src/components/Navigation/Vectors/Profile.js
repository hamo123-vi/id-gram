import React from 'react';
import '../../../style/navigation.css';
import { useSelector } from 'react-redux';

export const Profile = () => {

    const me = useSelector(state => state.me)

    return(
        <div className='menu-icon-container'>
            <img src={`http://localhost:5000/profilepicture/${me.image}`} alt="Error" style={{width:"22px", height:"22px", borderRadius:"22px"}}/>
        </div>
    )
}