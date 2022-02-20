import React from 'react';
import '../../style/forms.css';

export const AppDeviceLinks = () => {

  return (
        <div className='app-device-links-container'>
            <div className='desc'>
                <p className='auth-link-text'>Get the app</p>
            </div>
            <div className='icons-container'>
            <img id='ios-icon' alt="Download on the App Store" className="app-device-icon" 
                src="https://instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" />

            <img id='p-store-icon' alt="Get it on Google Play" className="app-device-icon"
             src="https://instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" />
            </div>
        </div>
    );
}