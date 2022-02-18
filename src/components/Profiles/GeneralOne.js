import React from 'react';
import '../../style/profiles.css'

export const GeneralOne = props => {

    return(
        <div className='general-one'>
            
            <div className='general'>
                <div class='profile-name'>
                    amil.valjevac
                </div>
                <div className="follow-button-container">
                    <button className={props.buttonClass}>{props.buttonValue}</button>
                </div> 
            </div>
            <div id='profile-more-button-container' className='more-button-container'>
                <img src={props.icon} alt='Error' className='more-button' />
            </div>
        </div>
    )
}