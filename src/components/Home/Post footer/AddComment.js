import React from 'react';
import '../../../style/post.css';
import icon from '../../../assets/Emoji.png'

export const AddComment = () => {

    return(
        <div className='add-comment-section'>
            <div className='comment-input-container'>
                <img className='add-coment-icon' src={icon} alt='Error' />
                <input type='text' placeholder='Add a comment...' className='add-comment' />
            </div>
            <div className='post-button-comment-container'>
                <button className='post-comment-button' onClick={() => alert('Comment submitted!')} disabled >Post</button>
            </div>
        </div>
    )
}