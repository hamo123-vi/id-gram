import React from 'react';
import '../../../style/post.css';
import { LikeContainer } from './LikeContainer';
import { LikeNumber } from './LikeNumber';
import { Description } from './Description';
import { PostTime } from './PostTime';
import { AddComment } from './AddComment';

export const Footer = props => {

    return(
        <div className='post-footer'>
            <LikeContainer id={props.id}/>
            <LikeNumber likes={props.likes}/>
            <Description />
            <PostTime />
            <AddComment id={props.id} buttonClass='post-comment-button' placeholder='Add a comment...'/>
        </div>
    )
}