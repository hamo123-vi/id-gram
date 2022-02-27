import React from 'react';
import '../../style/profiles.css'
import { FullName } from './FullName';
import { GeneralOne } from './GeneralOne';
import { ServiceInfo } from './ServiceInfo'

export const ProfileInfoContainer = props => {

    return(
        <div className='profile-info-container'>
            <GeneralOne username={props.username} path={props.path} icon={props.icon} buttonClass={props.buttonClass} buttonValue={props.buttonValue} />
            <ServiceInfo />
            <FullName fullname={props.fullname} />
        </div>
    )
}