import React from 'react';
import '../../style/forms.css';
import '../../style/home-secondary.css';


export const LanguageAndCredentials = () => {

  return (
        <div className='lac-container'>
            <div className='language-container'>
                <select className='links'>
                    <option>English</option>
                </select>
            </div>
            <div className='credentials-container'>
                <p id='creds' className='links'>© 2022 Instagram from Meta</p>
            </div>
        </div>
    );
}