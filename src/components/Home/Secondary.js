import React from 'react';
import '../../style/home.css'
import { Links } from './Secondary component/Links';
import { SuggestionHeaderContainer } from './Secondary component/Suggestion/Sugestion header/SuggestionHeaderContainer';
import { Suggestion } from './Secondary component/Suggestion/Suggestion';
import { SwitchAccount } from './Secondary component/Switch account/SwitchAccount'

export const Secondary = () => {

    return(
        <div className='secondary-home'>
            <SwitchAccount />
            <SuggestionHeaderContainer />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Links />
        </div>
    )
}