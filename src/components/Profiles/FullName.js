import React from 'react';
import '../../style/profiles.css'

export const FullName = props => {

    return(
        <div className='profile-full-name'>
            {props.fullname}
        </div>
    )
}