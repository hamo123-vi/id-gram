import React from 'react';
import '../../../style/post.css';
import like from '../../../assets/Like.png'
import comment from '../../../assets/Inbox.png'
import inbox from '../../../assets/Comment.png'
import { InnerContainer } from './InnerContainer';
import axios from 'axios';

export const LeftContainer = props => {

    const onLike = () => {
        axios.put(`http://localhost:5000/api/v1/posts/like/${props.id}`, {comment: comment}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            alert(res.message)
        }).catch(() => {
            alert('Error');
        });
    }

    return(
        <div className='left-container'>
            <InnerContainer onClick={onLike} src={like} />
            <InnerContainer src={comment} />
            <InnerContainer src={inbox} />
        </div>
    )
}