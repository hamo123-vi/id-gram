import React from 'react';
import '../../../style/post.css';
import { UserImage } from './UserImage';
import { UserName } from './UserName';

export const UserInfo = () => {

    return(
        <div className='user-info'>
            <UserImage />
            <UserName />
        </div>
    )
}