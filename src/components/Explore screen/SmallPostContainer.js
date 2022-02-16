import React from 'react';
import '../../style/explore.css'
import { Image } from '../Home/Image'

export const SmallPostContainer = () => {

    return(
        <div className='second-container'>
            <div class='small-post small-post-width'>
                <Image id='sp'/>
            </div>
            <div class='small-post small-post-width'>
                <Image id='sp'/>
            </div>
            <div class='small-post small-post-width'>
                <Image id='sp'/>
            </div>
            <div class='small-post small-post-width'>
                <Image id='sp'/>
            </div>
        </div>
    )
}