import React, { useEffect } from 'react';
import { showNav } from '../../assets/js/showNav';
import '../../style/explore.css'
import { FirstContainer } from './FirstContainer';
import { SmallPostContainer } from './SmallPostContainer';

export const Explore = () => {

    useEffect(() => {
        showNav()
    },[])

    return(
        <div className='explore-screen'>
            <FirstContainer />
            <SmallPostContainer />
        </div>
    )
}