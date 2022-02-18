import React from 'react';
import '../../style/profiles.css'

export const ServiceInfo = () => {

    return(
        <div className='service-info-container'>
            <div className='service-info'>Posts: <span className='service-number'>46</span></div>
            <div className='service-info'>Followers: <span className='service-number'>1237</span></div>
            <div className='service-info'>Following: <span className='service-number'>1221</span></div>
        </div>
    )
}