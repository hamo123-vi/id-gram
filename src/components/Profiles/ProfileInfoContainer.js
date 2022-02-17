import React from 'react';
import { MoreButton } from '../Home/Post header/MoreButton';
import '../../style/profiles.css'

export const ProfileInfoContainer = () => {

    return(
        <div className='profile-info-container'>
            
            <div className='general'>
                <div class='profile-name'>
                    amil.valjevac
                </div>
                <div className="follow-button-container">
                    <button className='follow-button'>Follow</button>
                </div> 
            </div>
            
            <div id='profile-more-button-container' className='more-button-container'>
                <MoreButton />
            </div>
        </div>
    )
}