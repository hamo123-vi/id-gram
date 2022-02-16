import React from 'react';
import '../../style/explore.css'
import { Image } from '../../components/Home/Image'

export const SecondContainer = () => {

    return(
        <div className='second-container'>
            <div class='small-post small-post-width'>
                <Image />
            </div>
            <div class='small-post small-post-width'>
                <Image />
            </div>
            <div class='small-post small-post-width'>
                <Image />
            </div>
            <div class='small-post small-post-width'>
                <Image />
            </div>
        </div>
    )
}