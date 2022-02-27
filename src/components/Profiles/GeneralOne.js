import React from 'react';
import '../../style/profiles.css'
import { Link } from 'react-router-dom'

export const GeneralOne = props => {

    return(
        <div className='general-one'>
            
            <div className='general'>
                <div class='profile-name'>
                    {props.username}
                </div>
                <div className="follow-button-container">
                    <button className={props.buttonClass}>{props.buttonValue}</button>
                </div> 
            </div>
            <div id='profile-more-button-container' className='more-button-container'>
                <Link to={props.path}>
                    <img src={props.icon} alt='Error' className='more-button' />
                </Link>
            </div>
        </div>
    )
}