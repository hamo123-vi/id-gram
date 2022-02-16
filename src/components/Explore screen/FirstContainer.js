import React from 'react';
import '../../style/explore.css'
import { Image } from '../Home/Image';

export const FirstContainer = () => {

    return(
        <div className='first-container'>
                <div class='first-one-container'>
                    <div class='small-post'>
                        <Image />
                    </div>
                    <div class='small-post'>
                        <Image />
                    </div>
                </div>
            <div class='big-post'>
                <Image />
            </div>
        </div>
    )
}