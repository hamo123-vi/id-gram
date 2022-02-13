import React from 'react';
import { Header } from './Header';
import { Image } from './Image';
import '../../style/post.css';

export const Post = () => {

    return(
        <div className='post'>
            <Header />
            <Image />
        </div>
    )
}