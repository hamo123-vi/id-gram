import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/explore.css'
import { Image } from '../Home/Image';

export const FirstContainer = () => {

    const exp = useSelector(state => state.explorePosts);

    return(
        <div className='first-container'>
            
            <div class='big-post'>
                <Image src={`http://localhost:5000/posts/${exp[0].image}`}/>
            </div>
            
            <div class='small-post'>
                <Image id="#sp" src={`http://localhost:5000/posts/${exp[1].image}`}/>
            </div>

            <div class='small-post'>
                <Image id="#spp" src={`http://localhost:5000/posts/${exp[2].image}`}/>
            </div>

        </div>
    )
}