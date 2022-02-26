import React, { useState } from 'react';
import axios from 'axios';
import '../../../style/post.css';
import icon from '../../../assets/Emoji.png'

export const AddComment = props => {

    const [comment, setComment] = useState('')

    const onPost = () => {
        axios.put(`http://localhost:5000/api/v1/posts/comment/${props.id}`, {comment: comment}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(() => {
        }).catch(() => {
            alert('Error');
        });
    }
    

    return(
        <form onSubmit={onPost}>
        <div id={props.id} className='add-comment-section'>
            <div className='comment-input-container'>
                <img className='add-coment-icon' src={icon} alt='Error' />
                <input type='text' placeholder={props.placeholder} className='add-comment' onChange={e => setComment(e.target.value)}/>
            </div>
            <div className='post-button-comment-container'>
                <button className={props.buttonClass}>Post</button>
            </div>
        </div>
        </form>
    ) 
}