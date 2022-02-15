import React from 'react';
import '../../../style/post.css';
import like from '../../../assets/Like.png'
import comment from '../../../assets/Inbox.png'
import inbox from '../../../assets/Comment.png'
import { InnerContainer } from './InnerContainer';

export const LeftContainer = () => {

    return(
        <div className='left-container'>
            <InnerContainer src={like} />
            <InnerContainer src={comment} />
            <InnerContainer src={inbox} />
        </div>
    )
}