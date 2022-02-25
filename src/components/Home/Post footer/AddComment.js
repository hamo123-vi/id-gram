import React from 'react';
import '../../../style/post.css';
import icon from '../../../assets/Emoji.png'

export const AddComment = props => {
    

    return(
        <div id={props.id} className='add-comment-section'>
            <div className='comment-input-container'>
                <img className='add-coment-icon' src={icon} alt='Error' />
                <input type='text' placeholder={props.placeholder} className='add-comment' />
            </div>
            <div className='post-button-comment-container'>
                <button className={props.buttonClass} onClick={props.onClick} >Post</button>
            </div>
        </div>
    )
}