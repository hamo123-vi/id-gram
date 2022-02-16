import React from 'react';
import '../../style/explore.css'
import { FirstContainer } from './FirstContainer';
import { SecondContainer } from './SecondContainer';

export const Explore = () => {

    return(
        <div className='explore-screen'>
            <FirstContainer />
            <SecondContainer />
        </div>
    )
}