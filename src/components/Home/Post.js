import React from 'react';
import { Header } from './Post header/Header';
import { Image } from './Image'
import '../../style/post.css';
import { Footer } from './Post footer/Footer';

export const Post = () => {

    return(
        <div className='post'>
            <Header />
            <Image />
            <Footer />
        </div>
    )
}