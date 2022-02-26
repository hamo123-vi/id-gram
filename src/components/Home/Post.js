import React from 'react';
import { Header } from './Post header/Header';
import { Image } from './Image'
import '../../style/post.css';
import { Footer } from './Post footer/Footer';

export const Post = props => {

    return(
        <div className='post'>
            <Header user={props.user}/>
            <Image src={props.src}/>
            <Footer src={props.id} user={props.user} id={props.id} description={props.description} likes= {props.likes}/>  
        </div>
    )
}