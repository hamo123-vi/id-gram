import React from 'react';
import '../../../style/post.css';
import { LeftContainer } from './LeftContainer';
import { RightContainer } from './RightContainer';

export const LikeContainer = () => {

    return(
        <div className='like-container'>
            <LeftContainer />
            <RightContainer />
        </div>
    )
}