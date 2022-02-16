import React from 'react';
import '../../../../../style/home-secondary.css';
import { SuggestionHeaderLeft } from './SugestionHeaderLeft';
import { Switch } from '../../Switch account/Switch';

export const SuggestionHeaderContainer = () => {

    return(
        <div className='suggestion-header-container'>
            <SuggestionHeaderLeft />
            <Switch value='See all' className='secondary-button black' />
        </div>
    )
}