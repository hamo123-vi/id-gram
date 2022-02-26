import React from 'react';
import '../../../style/post.css';
import { LeftContainer } from './LeftContainer';
import { RightContainer } from './RightContainer';

export const LikeContainer = props => {

    return(
        <div className='like-container'>
            <LeftContainer id={props.id}/>
            <RightContainer />
        </div>
    )
}