import React from 'react';
import username from '../../assets/terrylucas.png'
import '../../style/post.css';

export const UserName = () => {

    return(
        <div className='user-name'>
            <img className='post-user-name' src={username} alt='Error' />
        </div>
    )
}