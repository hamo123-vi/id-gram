import React from 'react';
import '../../../style/post.css';
import { LikeContainer } from './LikeContainer';
import { LikeNumber } from './LikeNumber';
import { Description } from './Description';
import { PostTime } from './PostTime';
import { AddComment } from './AddComment';

export const Footer = () => {

    return(
        <div className='post-footer'>
            <LikeContainer />
            <LikeNumber />
            <Description />
            <PostTime />
            <AddComment buttonClass='post-comment-button' placeholder='Add a comment...'/>
        </div>
    )
}