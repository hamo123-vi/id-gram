import React from 'react';
import '../../style/home.css'
import { Suggestion } from './Secondary component/Suggestion/Suggestion';
import { SwitchAccount } from './Secondary component/Switch account/SwitchAccount'

export const Secondary = () => {

    return(
        <div className='secondary-home'>
            <SwitchAccount />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
        </div>
    )
}