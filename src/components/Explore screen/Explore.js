import React from 'react';
import '../../style/explore.css'
import { FirstContainer } from './FirstContainer';
import { SmallPostContainer } from './SmallPostContainer';

export const Explore = () => {

    return(
        <div className='explore-screen'>
            <FirstContainer />
            <SmallPostContainer />
        </div>
    )
}