import React from 'react';
import '../../style/explore.css'
import { Image } from '../Home/Image';

export const FirstContainer = () => {

    return(
        <div className='first-container'>
            
            <div class='big-post'>
                <Image />
            </div>
            
            <div class='small-post'>
                <Image id="#sp"/>
            </div>

            <div class='small-post'>
                <Image id="#spp"/>
            </div>

        </div>
    )
}