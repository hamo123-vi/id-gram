import React from 'react';
import '../../../style/post.css';
import { More } from './More';
import { UserInfo } from './UserInfo';

export const Header = () => {

    return(
        <div className='post-header'>
            <UserInfo />
            <More />
        </div>
    )
}